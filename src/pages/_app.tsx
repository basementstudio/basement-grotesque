import { createContext, useContext, useEffect, useState, useRef } from 'react'
import { AppProps } from 'next/app'

// Primitives
import Cursor from 'components/primitives/cursor'

// GSAP
import { DURATION, gsap, SplitText } from 'lib/gsap'

// Styles
import 'css/global.css'

const Context = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false })
export const useAppContext = () => useContext(Context)

const App = ({ Component, pageProps }: AppProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const timeline = useRef<GSAPTimeline>()

  useEffect(() => {
    // @ts-ignore
    document.fonts.ready
      .then(() => {
        setFontsLoaded(true)
      })
      .catch((error: unknown) => {
        console.error(error)
        setFontsLoaded(true)
      })
  }, [])

  useEffect(() => {
    if (!fontsLoaded) return

    const title = new SplitText('#hero-title-outlined', {
      type: 'lines, words, chars'
    })

    const subtitle = new SplitText('#hero-title', {
      type: 'lines, words, chars'
    })

    timeline.current = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })

    timeline.current.to('body', {
      autoAlpha: 1
    })
    timeline.current.fromTo(
      '#header',
      {
        autoAlpha: 0,
        yPercent: -30
      },
      {
        autoAlpha: 1,
        yPercent: 0
      }
    )
    timeline.current.from(
      '#hero-wrapper',
      {
        autoAlpha: 0
      },
      '<20%'
    )
    timeline.current.in(
      title.chars,
      {
        duration: DURATION * 1.8
      },
      '<40%'
    )
    timeline.current.in(
      subtitle.chars,
      {
        duration: DURATION * 1.8
      },
      '<50%'
    )
    timeline.current.from(
      '#hero-image',
      {
        yPercent: 50,
        autoAlpha: 0,
        ease: 'back(1.2)'
      },
      '<80%'
    )

    timeline.current.play()

    return () => {
      timeline?.current?.kill()
    }
  }, [fontsLoaded])

  return (
    <Context.Provider value={{ fontsLoaded }}>
      <Cursor />
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default App
