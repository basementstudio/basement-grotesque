import { useLocomotiveScroll } from 'context/locomotive-scroll'
import { FC, useRef } from 'react'
import { useEffect } from 'react'

type NativeScrollContainerProps = {
  className?: string
}

const NativeScrollContainer: FC<NativeScrollContainerProps> = ({
  className,
  children
}) => {
  const { scroll } = useLocomotiveScroll()
  const lastScrollTop = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const innerScroller = containerRef.current as HTMLElement
    const hasScroll = (elm: HTMLElement) =>
      elm?.clientHeight < elm?.scrollHeight

    innerScroller.onwheel = (e) => {
      const reachedTopLimit =
        innerScroller.scrollTop === 0 &&
        lastScrollTop.current === 0 &&
        e.deltaY < 0
      const reachedBottomLimit =
        Math.round(innerScroller.scrollTop + innerScroller.clientHeight) ===
          Math.round(innerScroller.scrollHeight) && e.deltaY > 0

      if (!reachedTopLimit && !reachedBottomLimit) {
        scroll?.stop()
      } else {
        scroll?.start()
      }

      lastScrollTop.current =
        innerScroller.scrollTop <= 0 ? 0 : innerScroller.scrollTop
    }

    if (hasScroll(innerScroller)) {
      innerScroller.onmouseover = () => {
        scroll?.stop()
      }
    }

    innerScroller.onmouseout = () => {
      scroll?.start()
    }
  }, [scroll])

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  )
}

export default NativeScrollContainer
