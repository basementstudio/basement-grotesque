import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { LocomotiveScrollOptions, Scroll } from 'locomotive-scroll'
import mergeRefs from 'react-merge-refs'

// Hooks
import { useMeasure } from 'hooks/use-measure'
import Box from 'components/common/box'

export interface Context {
  scroll: Scroll | null
  isReady: boolean
}

const LocomotiveScrollContext = createContext<Context>({
  scroll: null,
  isReady: false
})

type Props = {
  children?: React.ReactNode
  options?: LocomotiveScrollOptions
}

export const LocomotiveScrollProvider = ({ children, options }: Props) => {
  const [isReady, setIsReady] = useState(false)
  const locomotiveScrollRef = useRef<Scroll | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [ref, { height }] = useMeasure({ debounce: 100 })

  useEffect(() => {
    ;(async () => {
      try {
        if (!scrollContainerRef.current) return
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locoScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          lerp: 0.09708,
          //@ts-ignore
          firefoxMultiplier: 100,
          //@ts-ignore
          smartphone: {
            smooth: false
          },
          ...options
        })

        locomotiveScrollRef.current = locoScroll
        setIsReady(true) // Re-render the context
      } catch (e) {
        //
      }
    })()

    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [options])

  useEffect(() => {
    locomotiveScrollRef.current?.update()
  }, [height])

  return (
    <LocomotiveScrollContext.Provider
      value={{ scroll: locomotiveScrollRef.current, isReady }}
    >
      <Box
        css={{ background: 'black' }}
        ref={mergeRefs([scrollContainerRef, ref])}
        data-scroll-container
      >
        {children}
      </Box>
    </LocomotiveScrollContext.Provider>
  )
}

export const useLocomotiveScroll = () => {
  const ctx = useContext(LocomotiveScrollContext)
  if (ctx === undefined) {
    throw new Error('useLocomotiveScroll: Context not found')
  }
  return ctx
}
