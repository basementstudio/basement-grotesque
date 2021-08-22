import { createContext, useContext, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { LocomotiveScrollProvider } from 'context/locomotive-scroll'
import { DURATION, gsap, SplitText } from 'lib/gsap'
import Cursor from 'components/primitives/cursor'
import Header from 'components/layout/header'
import { useAppGA } from 'lib/ga'
import 'css/global.css'

const Context = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false })
export const useAppContext = () => useContext(Context)

const App = ({ Component, pageProps }: AppProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useAppGA()

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
      autoAlpha: 1,
      duration: DURATION / 2
    })
    timeline.in(title.chars, '<80%')
    timeline.in(subtitle.chars, '<40%')
    timeline.from(
      ['.hero__link', '.hero__image'],
      {
        autoAlpha: 0,
        duration: DURATION * 0.8,
        stagger: 0.15,
        yPercent: 60
      },
      '>-20%'
    )

    timeline.timeScale(1.4).play()

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
