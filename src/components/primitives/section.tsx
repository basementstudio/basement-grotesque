import { gsap } from 'lib/gsap'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id }: Props) => {
  const { ref, inView, entry } = useInView()
  const timeline = useRef<GSAPTimeline>()

  useEffect(() => {
    if (!entry || !timeline) return
    timeline.current = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })
    timeline.current.fromTo(entry.target, { autoAlpha: 0 }, { autoAlpha: 1 })

    timeline.current.play()

    return () => {
      timeline.current?.kill()
    }
  }, [entry, inView])

  return (
    <section id={id} className={className} ref={ref} style={{ opacity: 0 }}>
      {children}
    </section>
  )
}

export default Section
