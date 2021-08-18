import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { AppProps } from 'next/app'

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
    timeline.current = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })

    timeline.current.to('body', {
      autoAlpha: 1
    })

    timeline.current.play()

    return () => {
      timeline.current?.kill()
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
