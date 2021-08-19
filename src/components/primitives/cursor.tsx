import { useEffect, useRef, useState } from 'react'

// Stitches
import { styled } from '../../../stitches.config'

// GSAP Stuff
import gsap from 'gsap'

const CursorFollower = styled('div', {
  $$size: '15px',
  $$sizeOuter: '33px',
  height: '$$sizeOuter',
  width: '$$sizeOuter',
  position: 'fixed',
  left: 0,
  pointerEvents: 'none',
  mixBlendMode: 'difference',
  top: 0,
  zIndex: 9999,

  '.outer': {
    mixBlendMode: 'difference',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    borderColor: 'transparent',
    borderRadius: '$round',
    borderWidth: '1px',
    height: '$$size',
    width: '$$size',
    willChange: 'transform',
    transition:
      'border-color .1s ease-in-out, width .22s ease-in-out, height .22s ease-in-out'
  },

  '.inner': {
    background: '$white',
    borderRadius: '$round',
    mixBlendMode: 'difference',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '$$size',
    width: '$$size',
    transition: 'all .1s ease-in-out'
  },

  variants: {
    type: {
      pointer: {
        '.outer': {
          borderColor: '$white',
          height: '$$sizeOuter',
          width: '$$sizeOuter'
        }
      },
      text: {
        '.inner': {
          width: '4px',
          borderRadius: '1px',
          height: '26px'
        }
      }
    }
  }
})

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [type, setType] = useState<'pointer' | 'text' | undefined>()

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
      if (e.target instanceof HTMLElement || e.target instanceof SVGElement) {
        if (e.target.closest('button') || e.target.closest('a')) {
          setType('pointer')
          return
        } else if (
          e.target.closest('p') ||
          e.target.closest('span') ||
          e.target.closest('h1') ||
          e.target.closest('h2') ||
          e.target.closest('h3') ||
          e.target.closest('h4') ||
          e.target.closest('h5') ||
          e.target.closest('h5') ||
          e.target.closest('input') ||
          e.target.closest('textarea')
        ) {
          setType('text')
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

  return (
    <CursorFollower ref={cursorRef} type={type}>
      <div className="outer" />
      <div className="inner" />
    </CursorFollower>
  )
}

export default Cursor
