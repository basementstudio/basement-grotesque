import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id }: Props) => {
  const { ref, inView, entry } = useInView()
  const timelineRef = useRef<GSAPTimeline>()

  useEffect(() => {
    if (!entry || !timelineRef) return
    timelineRef.current = gsap.timeline({
      paused: true,
      smoothChildTiming: true,
      defaults: {
        overwrite: true
      }
    })
    timelineRef.current.fromTo(entry.target, { autoAlpha: 0 }, { autoAlpha: 1 })

    timelineRef.current.play()

    return () => {
      timelineRef.current?.kill()
    }
  }, [entry, inView])

  return (
    <section id={id} className={className} ref={ref} style={{ opacity: 0 }}>
      {children}
    </section>
  )
}

export default Section
