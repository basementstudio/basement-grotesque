import Head, { HeadProps } from 'components/common/head'
import Footer from './footer'
import Header from './header'

type Props = {
  children?: React.ReactNode
  headProps?: HeadProps

  // TODO after implementing head, header, footer
  // headerProps: HeaderProps
  // footerProps: FooterProps
}

const PageLayout = ({ children, headProps }: Props) => {
  return (
    <>
      <Head {...headProps} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
