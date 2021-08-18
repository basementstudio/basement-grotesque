import { useEffect, useRef, useState } from 'react'

// Stitches
import { styled } from '../../../stitches.config'

// GSAP Stuff
import gsap from 'gsap'

const CursorFollower = styled('div', {
  borderColor: 'transparent',
  borderRadius: '$round',
  borderWidth: '1px',
  height: '33px',
  left: 0,
  pointerEvents: 'none',
  position: 'fixed',
  mixBlendMode: 'difference',
  top: 0,
  width: '33px',
  willChange: 'transform',
  zIndex: 9999,
  transition: 'border-color .1s ease-in-out',
  '&::after': {
    background: '$white',
    borderRadius: '$round',
    content: `''`,
    height: '15px',
    left: '50%',
    mixBlendMode: 'difference',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '15px'
  },

  variants: {
    type: {
      pointer: {
        borderColor: '$white'
      }
    }
  }
})

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [type, setType] = useState<'pointer' | undefined>()

  useEffect(() => {
    if (!cursorRef.current) return
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.2

    const xSet = gsap.quickSetter(cursorRef.current, 'x', 'px')
    const ySet = gsap.quickSetter(cursorRef.current, 'y', 'px')

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.x
      mouse.y = e.y
      if (e.target instanceof HTMLElement) {
        if (e.target.closest('button') || e.target.closest('a')) {
          setType('pointer')
          return
        }
      }
      setType(undefined)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <CursorFollower ref={cursorRef} type={type} />
}

export default Cursor
