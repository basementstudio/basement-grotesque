import { useEffect, useRef } from 'react'

// Stitches
import { styled } from '../../../stitches.config'

// GSAP Stuff
import gsap from 'gsap'

const CursorFollower = styled('div', {
  borderColor: '$black',
  borderRadius: '$round',
  borderWidth: '2px',
  height: '$4',
  left: 0,
  pointerEvents: 'none',
  position: 'fixed',
  top: 0,
  width: '$4',
  willChange: 'transform'
})

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!cursorRef.current) return
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.2

    const fpms = 60 / 1000

    const xSet = gsap.quickSetter(cursorRef.current, 'x', 'px')
    const ySet = gsap.quickSetter(cursorRef.current, 'y', 'px')

    window.addEventListener(
      'mousemove',
      (e) => {
        e.preventDefault()
        mouse.x = e.x
        mouse.y = e.y
      },
      { passive: true }
    )

    gsap.ticker.add((deltaTime) => {
      const delta = deltaTime * fpms
      const dt = 1.0 - Math.pow(1.0 - speed, delta)

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  }, [])
  return <CursorFollower ref={cursorRef}></CursorFollower>
}

export default Cursor
