import { createContext, useContext, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { LocomotiveScrollProvider } from 'context/locomotive-scroll'

// Gsap Stuff
import { gsap, SplitText } from 'lib/gsap'

// Primitives
import Cursor from 'components/primitives/cursor'

// Layout
import Header from 'components/layout/header'

// Styles
import 'css/global.css'

const Context = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false })
export const useAppContext = () => useContext(Context)

const App = ({ Component, pageProps }: AppProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

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

    const title = new SplitText('.hero__title', {
      type: 'chars'
    })

    const subtitle = new SplitText('.hero__subtitle', {
      type: 'chars'
    })

    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })

    timeline.to('body', {
      autoAlpha: 1
    })
    timeline.from('#header', {
      yPercent: -30,
      autoAlpha: 0
    })
    timeline.in(title.chars, '<80%')
    timeline.in(subtitle.chars, '<45%')
    timeline.from(
      ['.hero__link', '.hero__image'],
      {
        yPercent: 60,
        autoAlpha: 0,
        stagger: 0.2
      },
      '>-20%'
    )

    timeline.play()

    return () => {
      timeline?.kill()
    }
  }, [fontsLoaded])

  return (
    <Context.Provider value={{ fontsLoaded }}>
      <Header />
      <Toaster position="bottom-center" />
      <Cursor>
        <LocomotiveScrollProvider>
          <Component {...pageProps} />
        </LocomotiveScrollProvider>
      </Cursor>
    </Context.Provider>
  )
}

export default App
