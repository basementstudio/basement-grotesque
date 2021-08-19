import { gsap } from 'lib/gsap'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '../../../stitches.config'

const StyledSection = styled('div', {
  position: 'relative',
  opacity: 0,
  background: '$white',
  color: '$black',
  my: '-1px',

  variants: {
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

const Section = (
  props: React.ComponentPropsWithoutRef<typeof StyledSection>
) => {
  const { ref, inView, entry } = useInView()

  useEffect(() => {
    if (!entry) return
    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })
    timeline.fromTo(entry.target, { autoAlpha: 0 }, { autoAlpha: 1 })

    timeline.play()

    return () => {
      timeline?.kill()
    }
  }, [entry, inView])

  return <StyledSection {...props} ref={ref} data-scroll-section />
}

export default Section
