import { AppProps } from 'next/app'
import 'css/global.css'
import Cursor from 'components/primitives/cursor'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  )
}

export default App
