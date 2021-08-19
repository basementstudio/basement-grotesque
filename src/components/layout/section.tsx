import { gsap } from 'lib/gsap'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '../../../stitches.config'

const StyledSection = styled('div', {
  position: 'relative',
  background: '$white',
  color: '$black',
  my: '-1px',

  variants: {
    fadeIn: {
      true: {
        opacity: 0
      }
    },
    background: {
      black: {
        background: '$black',
        color: '$white'
      },
      muted: {
        background: '$background',
        color: '$white'
      }
    }
  }
})

type SectionProps = React.ComponentPropsWithoutRef<typeof StyledSection> & {
  fadeIn?: boolean
}

const Section = ({ fadeIn = true, ...rest }: SectionProps) => {
  const { ref, inView, entry } = useInView()

  useEffect(() => {
    if (!fadeIn || !entry) return
    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })
    timeline.fromTo(entry.target, { autoAlpha: 0 }, { autoAlpha: 1 })

    timeline.play()

    return () => {
      timeline?.kill()
    }
  }, [entry, inView, fadeIn])

  return (
    <StyledSection {...rest} fadeIn={fadeIn} ref={ref} data-scroll-section />
  )
}

export default Section
