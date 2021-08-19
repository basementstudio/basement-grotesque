import Head, { HeadProps } from 'components/common/head'
import Footer from './footer'

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
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
