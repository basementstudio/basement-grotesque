import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { isMobile as _isMobile } from 'react-device-detect'

// Lib
import { download } from 'lib/utils'

// Stitches
import { styled } from '../../../../stitches.config'

// Logos
import IconClock from 'logos/clock.svg'
import Logo from 'logos/header-logo.svg'
import Button from 'components/primitives/button'
import { ArrowDown } from 'components/primitives/arrow'
import Container from '../container'
import Box from 'components/common/box'
import MobileMenu from './mobile-menu'
import { useToggleState } from 'hooks/use-toggle-state'
import { useLocomotiveScroll } from 'context/locomotive-scroll'

const StyledHeader = styled('header', {
  my: '$4',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  zIndex: '9998'
})

const StyledTime = styled('time', {
  display: 'inline-flex',
  justifyContent: 'flex-start',
  textTransform: 'uppercase',
  width: '80px'
})

const Time = ({ variant }: { variant?: 'mobile' }) => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const renderTime = useCallback((date: Date) => {
    let hours: number | string = date.getHours()
    let minutes: number | string = date.getMinutes()
    let seconds: number | string = date.getSeconds()
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return (
      <StyledTime>
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      </StyledTime>
    )
  }, [])

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        px: '$$px',
        height: '100%',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        ...(variant === 'mobile'
          ? {
              flexGrow: 1,
              justifyContent: 'center'
            }
          : undefined)
      }}
    >
      <IconClock style={{ marginRight: 8 }} />
      {renderTime(now)}
    </Box>
  )
}

const StyledButton = styled(Button, {
  fontWeight: '700',
  textTransform: 'uppercase'
})

export const DownloadButton = ({
  variant,
  className,
  tabIndex
}: {
  variant?: 'mobile'
  className?: string
  tabIndex?: number
}) => {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    setIsMobile(_isMobile)
  }, [])

  const shouldOnlyTweet = useMemo(() => {
    return isMobile || variant === 'mobile'
  }, [isMobile, variant])

  const handleDownload = useCallback(() => {
    const encoded = {
      url: window.location.origin + window.location.pathname,
      text: 'TODO'
    }
    window.open(
      `https://twitter.com/intent/tweet?url=${encoded.url}&text=${encoded.text}`,
      '_blank'
    )
    if (!shouldOnlyTweet) {
      download(
        encodeURI(location.origin + '/BasementGrotesque-Black_v1.202.zip')
      )
    }
  }, [shouldOnlyTweet])

  return (
    <StyledButton
      onClick={handleDownload}
      className={className}
      tabIndex={tabIndex}
      css={{
        px: '$$px',
        ...(variant === 'mobile'
          ? {
              fontSize: '40px',
              textAlign: 'left',
              position: 'relative'
            }
          : { height: '100%' })
      }}
      icon={
        <ArrowDown
          // @ts-ignore
          css={{
            $$size: '15px',
            transform: 'rotate(270deg)',
            ...(variant === 'mobile'
              ? {
                  position: 'absolute',
                  $$size: '32px',
                  bottom: '14px',
                  left: '200px'
                }
              : undefined)
          }}
        />
      }
    >
      {shouldOnlyTweet ? 'TWEET IT' : <>TWEET AND GET IT&nbsp;FREE</>}{' '}
    </StyledButton>
  )
}

const Header = () => {
  const mobileMenuState = useToggleState()
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 519) {
        mobileMenuState.handleOff()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuState])

  const handleLogoClick = useCallback(() => {
    if (scroll) {
      scroll.scrollTo(0)
    }
  }, [scroll])

  return (
    <StyledHeader id="header">
      <Container
        css={{
          fontWeight: '700',
          color: 'white'
        }}
        maxWidth
      >
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid black',
            height: '56px',
            backdropFilter: 'saturate(180%) blur(5px)',
            backgroundColor: 'rgba(16, 16, 16, .8)',

            $$px: '18px'
          }}
        >
          <Box css={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Link href="/" passHref>
              <Box
                as="a"
                title="Basement Grotesque"
                css={{ px: '$$px' }}
                onClick={handleLogoClick}
              >
                <Logo style={{ margin: 0 }} />
              </Box>
            </Link>
            <Box
              css={{
                display: 'flex',
                alignItems: 'center',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                px: '$$px',
                height: '100%',
                '.divider': { mx: '12px' },
                '.regular': { fontWeight: '400' },
                '> p, > span': {
                  display: 'none'
                },

                '@media screen and (min-width: 742px)': {
                  '.ipad': {
                    display: 'block'
                  }
                },

                '@media screen and (min-width: 1268px)': {
                  '> p, > span': {
                    display: 'block'
                  }
                }
              }}
            >
              <p className="ipad">
                <span>Grotesque 800</span> <span>/</span>{' '}
                <span className="regular">v.1.2</span>
              </p>
              <span className="divider">·</span>
              <p>
                <span>Grotesque 400</span> <span>/</span>{' '}
                <span className="regular">In Progress</span>
              </p>
              <span className="divider">·</span>
              <p>
                <span>Grotesque 900</span> <span>/</span>{' '}
                <span className="regular">In Progress</span>
              </p>
            </Box>
          </Box>
          <Box
            css={{
              display: 'none',
              '@bp1': {
                display: 'flex'
              },
              alignItems: 'center',
              height: '100%',
              flexShrink: 0
            }}
          >
            <Time />
            <DownloadButton />
          </Box>
          <Box
            css={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              '@bp1': { display: 'none' }
            }}
          >
            <Time variant="mobile" />
          </Box>
          <Box
            css={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              '@bp1': { display: 'none' }
            }}
          >
            <MobileMenu {...mobileMenuState} />
          </Box>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
