import { AppProps } from 'next/app'
import 'css/global.css'
import Cursor from 'components/primitives/cursor'
import { createContext, useContext, useEffect, useState } from 'react'

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

  return (
    <Context.Provider value={{ fontsLoaded }}>
      <Cursor />
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default App
