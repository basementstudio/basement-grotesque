import { gsap } from 'lib/gsap'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id }: Props) => {
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

  return (
    <section
      className={className}
      data-scroll-section
      id={id}
      ref={ref}
      style={{ opacity: 0 }}
    >
      {children}
    </section>
  )
}

export default Section
