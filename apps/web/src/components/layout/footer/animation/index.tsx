import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { styled } from '../../../../../stitches.config'
import { range } from 'lib/utils'
import { animation } from './physics'
import { useBreakpoint } from 'hooks/use-breakpoint'

const Canvas = styled('div', {
  overflow: 'hidden',
  position: 'absolute',
  top: -600,
  right: 0,
  left: 0,
  bottom: 0
})

const Letter = styled('span', {
  '--letter-size': '45px',
  '--letter-width-ratio': '0.7',
  '--letter-height-ratio': '0.8',

  fontFamily: '$heading',
  display: 'inline-block',
  margin: 2,
  width: 'calc(var(--letter-size) * var(--letter-width-ratio))',
  height: 'calc(var(--letter-size) * var(--letter-height-ratio))',
  fontSize: 'var(--letter-size)',
  lineHeight: 'calc(var(--letter-size) * var(--letter-height-ratio))',
  willChange: 'transform',

  '@bp2': {
    '--letter-size': '80px'
  },

  variants: {
    outlined: {
      true: {
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': '1px white'
      }
    }
  }
})

const LETTERS = ['l', 'f', 'n', 'Y', 'b', '1', '7', '8']

const FooterAnimation = () => {
  const animContainerRef = useRef<HTMLDivElement>(null)
  const breakpoint = useBreakpoint()

  useEffect(() => {
    animation(animContainerRef.current)
  }, [breakpoint])

  return (
    <Canvas ref={animContainerRef} id="playground">
      {range(70).map((i) => (
        <Letter outlined={gsap.utils.random(-1, 1) < 0} key={i}>
          {LETTERS[gsap.utils.random(0, LETTERS.length - 1, 1)]}
        </Letter>
      ))}
    </Canvas>
  )
}

export default FooterAnimation
