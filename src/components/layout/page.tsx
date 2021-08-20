import Head, { HeadProps } from 'components/common/head'
import { useLocomotiveScroll } from 'context/locomotive-scroll'
import { useEffect } from 'react'
import Footer from './footer'

type Props = {
  children?: React.ReactNode
  headProps?: HeadProps

  // TODO after implementing head, header, footer
  // headerProps: HeaderProps
  // footerProps: FooterProps
}

const PageLayout = ({ children, headProps }: Props) => {
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    const innerScrollers: NodeListOf<HTMLElement> = document.querySelectorAll(
      '*[data-native-scroll-container]'
    )

    innerScrollers.forEach((innerScroller) => {
      innerScroller.onmouseover = (e) => {
        if (
          (e.currentTarget as HTMLElement)?.clientHeight <
          (e.currentTarget as HTMLElement)?.scrollHeight
        ) {
          scroll?.stop()
        }
      }

      innerScroller.onmouseout = () => {
        scroll?.start()
      }
    })
  }, [scroll])

  return (
    <>
      <Head {...headProps} />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
