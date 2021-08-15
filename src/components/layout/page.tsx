import Head, { HeadProps } from 'components/common/head'
import Container, { ContainerProps } from './container'
import Footer from './footer'
import Header from './header'

type Props = {
  children?: React.ReactNode
  contain?: boolean | ContainerProps
  headProps?: HeadProps

  // TODO after implementing head, header, footer
  // headerProps: HeaderProps
  // footerProps: FooterProps
}

const PageLayout = ({ children, contain, headProps }: Props) => {
  return (
    <>
      <Head {...headProps} />
      <Header />
      <main>
        {contain ? <Container {...contain}>{children}</Container> : children}
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
