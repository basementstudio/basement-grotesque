import { gsap } from 'lib/gsap'
import p2 from 'p2'

const DISTANCE_UNIT = 50
const ANGLE_UNIT = 57.2958
const MAX_INITIAL_ANGLE_ENTROPY = 3

class PlaygroundNode {
  constructor(node) {
    this.node = node
    this.entities = []
    this.world = new p2.World()
    this.initBoundaries()
  }

  initBoundaries() {
    const values = nodeToP2Values(this.node)
    const floor = new p2.Body()
    floor.addShape(new p2.Plane())
    this.world.addBody(floor)

    const left = new p2.Body({
      angle: (3 * Math.PI) / 2
    })
    left.addShape(new p2.Plane())
    this.world.addBody(left)

    const right = new p2.Body({
      angle: Math.PI / 2,
      position: [values.width, 0]
    })
    right.addShape(new p2.Plane())
    this.world.addBody(right)

    const ceiling = new p2.Body({
      angle: Math.PI,
      position: [0, 100]
    })

    ceiling.addShape(new p2.Plane())
    this.world.addBody(ceiling)
  }

  initChildren() {
    for (const entity of this.entities) {
      entity.precreateBody()
    }
    const children = this.node.children
    this.entities = []
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      const entity = new EntityNode(this.world, child)
      this.entities.push(entity)
      entity.precreateBody()
    }
    for (const entity of this.entities) {
      entity.createBody()
    }
  }

  addChild(node) {
    const entity = new EntityNode(this.world, node)
    this.entities.push(entity)
    entity.precreateBody()
    entity.createBody()
  }

  addChildren(nodes) {
    const toCreate = []
    for (const node of nodes) {
      const entity = new EntityNode(this.world, node)
      this.entities.push(entity)
      toCreate.push(entity)
      entity.precreateBody()
    }
    for (const entity of toCreate) {
      entity.createBody()
    }
  }

  updateChildren() {
    for (const entity of this.entities) {
      entity.updateNode()
    }
    this.world.step(1 / 60)
  }
}

class EntityNode {
  constructor(world, node) {
    this.world = world
    this.node = node
    this.nextBodyValues = {}
    this.body = undefined
  }

  updateNode() {
    if (!this.body) return
    const values = p2BodyToNodeValues(this.body)
    this.applyStyles(this.node, values)
  }

  applyStyles(node, values) {
    const { position, bottom, left, width, height, posX, posY, angle } = values

    this.node.style.position = position || ''
    this.node.style.bottom = bottom ? bottom : ''
    this.node.style.left = left ? left : ''
    this.node.style.width = width ? `${width}px` : ''
    this.node.style.height = height ? `${height}px` : ''
    const translateStr =
      posX && posY
        ? `translate3d(calc(${posX}px - 50%),
      calc(-1 * ${posY}px + 50%),
      0)`
        : ''
    const rotateStr = angle !== undefined ? `rotate(${angle}deg)` : ''
    this.node.style.transform = translateStr + ' ' + rotateStr
  }

  precreateBody() {
    if (this.body) {
      this.world.removeBody(this.body)
      this.body = undefined
    }
    this.applyStyles(this.node, {})
    this.nextBodyValues = nodeToP2Values(this.node)
  }

  createBody() {
    if (this.body) {
      this.world.removeBody(this.body)
      this.body = undefined
    }
    const { width, height, position } = this.nextBodyValues
    this.body = new p2.Body({
      mass: 1,
      angularVelocity: (Math.random() - 0.5) * MAX_INITIAL_ANGLE_ENTROPY * 2,
      position,
      angle: gsap.utils.random(-100, 100)
    })

    this.body.addShape(new p2.Box({ width, height }))
    this.world.addBody(this.body)
  }
}

const p2BodyToNodeValues = (body) => {
  const shape = body.shapes[0]
  const width = shape.width * DISTANCE_UNIT
  const height = shape.height * DISTANCE_UNIT
  const posX = body.position[0] * DISTANCE_UNIT
  const posY = body.position[1] * DISTANCE_UNIT
  const angle = body.angle * -ANGLE_UNIT

  return {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width,
    height,
    posX,
    posY,
    angle
  }
}

const nodeToP2Values = (node) => {
  const width = node.offsetWidth / DISTANCE_UNIT
  const height = node.offsetHeight / DISTANCE_UNIT
  const top = node.offsetTop / DISTANCE_UNIT
  const posX = node.offsetLeft / DISTANCE_UNIT + width / 2
  const posY = node.parentNode.offsetHeight / DISTANCE_UNIT - top - height / 2

  return {
    width,
    height,
    position: [posX, posY]
  }
}

export const animation = (element) => {
  const playground = new PlaygroundNode(element)

  playground.initChildren()

  const animate = () => {
    playground.updateChildren()
    gsap.ticker.add(animate)
  }

  animate()
}
