import { createContext, useContext, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { isMobile as _isMobile } from 'react-device-detect'

import { LocomotiveScrollProvider } from 'context/locomotive-scroll'

// Gsap Stuff
import { gsap } from 'lib/gsap'

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
  const [isMobile, setIsMobile] = useState<boolean>()

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

    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })

    timeline.to('body', {
      autoAlpha: 1
    })

    timeline.play()

    return () => {
      timeline?.kill()
    }
  }, [fontsLoaded])

  useEffect(() => {
    setIsMobile(_isMobile)
  }, [])

  return (
    <Context.Provider value={{ fontsLoaded }}>
      {isMobile === false && <Cursor />}
      <Header />
      <Toaster position="bottom-center" />
      <LocomotiveScrollProvider>
        <Component {...pageProps} />
      </LocomotiveScrollProvider>
    </Context.Provider>
  )
}

export default App
