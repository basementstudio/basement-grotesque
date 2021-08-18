import { download } from 'lib/utils'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

// Stitches
import { styled } from '../../../stitches.config'

// Logos
import IconArrow from 'logos/arrow.svg'
import IconClock from 'logos/clock.svg'
import IconMobile from 'logos/hamburguer.svg'
import Logo from 'logos/header-logo.svg'

const Heading = styled('header', {
  backgroundColor: '$black',
  border: '1px solid $white',
  color: '$white',
  fontWeight: 'bold',
  left: 0,
  margin: '$4 40px',
  mixBlendMode: 'difference',
  position: 'fixed',
  top: 0,
  width: 'calc(100% - $5)',
  zIndex: '9998',

  '> div': {
    display: 'grid',
    gridTemplateColumns: '54px 1fr 54px',
    alignItems: 'center',

    '@bp2': {
      gridTemplateColumns: 'auto 3fr .8fr .8fr'
    },

    div: {
      alignItems: 'center',
      borderRight: '1px solid $white',
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
          paddingBottom: '$2'
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

function renderTime(date: Date) {
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
}

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
            <span>Grotesque 800 /</span>{' '}
            <span style={{ fontWeight: 400 }}>v.1.2</span>
          </p>
          <span>.</span>
          <p>
            <span>Grotesque 400 /</span>{' '}
            <span style={{ fontWeight: 400 }}>In Progress</span>
          </p>
          <span>.</span>
          <p>
            <span>Grotesque 900 /</span>{' '}
            <span style={{ fontWeight: 400 }}>In Progress</span>
          </p>
        </div>
        <div>
          <IconClock />
          {renderTime(now)}
        </div>
        <DownloadButton onClick={handleDownload}>
          Download Font <IconArrow />
        </DownloadButton>
        <IconMobile className="mobile__menu" style={{ margin: '0 auto' }} />
      </div>
    </Heading>
  )
}

export default Header
