import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

// Lib
import { download } from 'lib/utils'

// Stitches
import { styled } from '../../../stitches.config'

// Logos
import IconArrow from 'logos/arrow.svg'
import IconClock from 'logos/clock.svg'
import IconMobile from 'logos/hamburguer.svg'
import Logo from 'logos/header-logo.svg'

const Heading = styled('header', {
  backgroundColor: '$background',
  border: '1px solid $black',
  color: '$white',
  fontWeight: '700',
  left: 0,
  margin: '$4 40px',
  position: 'fixed',
  top: 0,
  width: 'calc(100% - $5)',
  zIndex: '9998',

  '> div': {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '54px 1fr 54px',

    '@bp2': {
      gridTemplateColumns: 'auto 2.5fr .57fr .92fr'
    },

    div: {
      alignItems: 'center',
      borderRight: '1px solid $black',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      lineHeight: 1,
      padding: '12px 15px',
      textAlign: 'center',

      '&.fonts': {
        gap: '$3',
        display: 'none',
        '@bp2': {
          display: 'flex'
        },
        '> span': {
          paddingBottom: '$2',
          color: '$black'
        }
      }
    },
    button: {
      alignItems: 'center',
      display: 'none',
      height: '100%',
      justifyContent: 'center',
      lineHeight: 1,
      padding: '20px',
      textAlign: 'center',
      '@bp2': {
        display: 'flex'
      }
    }
  },

  svg: {
    display: 'inline-block',
    margin: '0 $2',
    verticalAlign: 'bottom',
    '&.mobile__menu': {
      display: 'block',
      '@bp2': {
        display: 'none'
      }
    }
  }
})

const DownloadButton = styled('button', {
  fontWeight: '700',
  textTransform: 'uppercase'
})

const Time = styled('time', {
  display: 'inline-flex',
  justifyContent: 'center',
  textTransform: 'uppercase',
  width: '80px'
})

const Header = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const handleDownload = useCallback(() => {
    download(
      encodeURI(location.origin + '/BSMNT Grotesque_v1.201.zip'),
      'BSMNT Grotesque_v1.201.zip'
    )
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
      <Time>
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      </Time>
    )
  }, [])

  return (
    <Heading>
      <div>
        <div>
          <Link href="/">
            <a>
              <Logo style={{ margin: 0 }} />
            </a>
          </Link>
        </div>
        <div className="fonts">
          <p>
            <span>Grotesque 800</span>{' '}
            <span style={{ color: 'var(--colors-black)' }}>/</span>{' '}
            <span style={{ fontWeight: 400 }}>v.1.2</span>
          </p>
          <span>.</span>
          <p>
            <span>Grotesque 400</span>{' '}
            <span style={{ color: 'var(--colors-black)' }}>/</span>{' '}
            <span style={{ fontWeight: 400 }}>In Progress</span>
          </p>
          <span>.</span>
          <p>
            <span>Grotesque 900</span>{' '}
            <span style={{ color: 'var(--colors-black)' }}>/</span>{' '}
            <span style={{ fontWeight: 400 }}>In Progress</span>
          </p>
        </div>
        <div>
          <IconClock style={{ marginLeft: 0 }} />
          {renderTime(now)}
        </div>
        <DownloadButton onClick={handleDownload}>
          TWEET AND GET IT FREE <IconArrow style={{ marginRight: 0 }} />
        </DownloadButton>
        <IconMobile className="mobile__menu" style={{ margin: '0 auto' }} />
      </div>
    </Heading>
  )
}

export default Header
