import { createContext, useContext, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

// Gsap Stuff
import { gsap } from 'lib/gsap'

// Primitives
import Cursor from 'components/primitives/cursor'

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

  return (
    <Context.Provider value={{ fontsLoaded }}>
      <Cursor />
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </Context.Provider>
  )
}

export default App
