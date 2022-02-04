import { ResizeObserver } from '@juggle/resize-observer'
import { useThree, Vector3 } from '@react-three/fiber'
import * as React from 'react'

import { useR3fContextDispatch } from '../../context'

export const GroupSlot = ({
  shadowElement,
  children
}: {
  shadowElement: HTMLElement
  children?: React.ReactNode
}) => {
  const ref = React.useRef<THREE.Group>(null)
  const { viewport } = useThree()

  React.useEffect(() => {
    function handleResize() {
      if (!ref.current) return
      // const top = shadowElement.offsetTop // we get top from there because bounding takes into account the scroll
      const { width, height, left, top } = shadowElement.getBoundingClientRect()
      const clientWidth =
        document.documentElement.clientWidth ?? window.innerWidth
      const clientHeight =
        document.documentElement.clientHeight ?? window.innerHeight
      const scale: Vector3 = [
        (width / clientWidth) * viewport.width,
        (height / clientHeight) * viewport.height,
        1
      ]
      const position: Vector3 = [
        ((width / clientWidth) * viewport.width) / 2 -
          viewport.width / 2 +
          (left / clientWidth) * viewport.width,
        0 -
          ((height / clientHeight) * viewport.height) / 2 +
          viewport.height / 2 -
          (top / clientHeight) * viewport.height,
        0
      ]
      ref.current.scale.set(...scale)
      ref.current.position.set(...position)
    }

    const observer = new ResizeObserver(handleResize)

    handleResize()
    observer.observe(shadowElement)
    // window.addEventListener('resize', handleResize)
    return () => {
      observer.unobserve(shadowElement)
      // window.removeEventListener('resize', handleResize)
    }
  }, [shadowElement, viewport.height, viewport.width])

  return <group ref={ref}>{children}</group>
}

export const R3fGroup = React.memo(
  ({
    children,
    style,
    id,
    ...rest
  }: Omit<JSX.IntrinsicElements['div'], 'ref'>) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { addChildren } = useR3fContextDispatch()

    React.useEffect(() => {
      if (!ref.current) return
      addChildren({
        key: id ?? 'group',
        Renderer: GroupSlot,
        props: { shadowElement: ref.current, children }
      })
    }, [addChildren, children, id])

    return <div {...rest} style={{ opacity: 0, ...style }} ref={ref} />
  }
)
