import clsx from 'clsx'
import { useLocomotiveScroll } from 'context/locomotive-scroll'
import { FC, useRef } from 'react'
import { useEffect } from 'react'

import s from './native-scroll-container.module.css'

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

    const wheelHandler = (e: WheelEvent) => {
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

    const mouseOverHandler = () => {
      scroll?.stop()
    }

    const mouseOutHandler = () => {
      scroll?.start()
    }

    innerScroller.addEventListener('wheel', wheelHandler)
    innerScroller.addEventListener('mouseout', mouseOutHandler)

    if (innerScroller?.clientHeight < innerScroller?.scrollHeight) {
      innerScroller.addEventListener('mouseover', mouseOverHandler)
    }

    return () => {
      innerScroller.removeEventListener('wheel', wheelHandler)
      innerScroller.removeEventListener('mouseout', mouseOutHandler)
      innerScroller.removeEventListener('mouseover', mouseOverHandler)
    }
  }, [scroll])

  return (
    <div className={clsx(className, s.container)} ref={containerRef}>
      {children}
    </div>
  )
}

export default NativeScrollContainer
