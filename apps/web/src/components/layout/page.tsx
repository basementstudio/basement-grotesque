import Head, { HeadProps } from 'components/common/head'
import Footer from './footer'
import Header from './header'

type Props = {
  children?: React.ReactNode
  headProps?: HeadProps

  header?: false | React.ReactNode
  footer?: false | React.ReactNode
}

const PageLayout = ({ children, headProps, header, footer }: Props) => {
  return (
    <>
      <Head {...headProps} />
      {header === false ? null : <>{header ?? <Header />}</>}
      {children}
      {footer === false ? null : <>{footer ?? <Footer />}</>}
    </>
  )
}

export default PageLayout
