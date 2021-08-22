import clsx from 'clsx'
import { ToggleState } from 'hooks/use-toggle-state'
import Portal from 'components/primitives/portal'
import Container from 'components/layout/container'
import { useEffect } from 'react'
import { gsap } from 'lib/gsap'
import Box from 'components/common/box'
import { DownloadButton } from '../'

import s from './mobile-menu.module.scss'

const MobileMenu = ({ isOn, handleToggle }: ToggleState) => {
  useEffect(() => {
    let tween: gsap.core.Tween | undefined
    const staggerItems = document.querySelectorAll('.stagger')
    if (isOn) {
      tween = gsap.to(staggerItems, {
        autoAlpha: 1,
        stagger: 0.04,
        delay: 0.48,
        scaleY: 1
      })
    } else {
      tween = gsap.to(staggerItems, {
        autoAlpha: 0,
        scaleY: 0.95
      })
    }

    return () => {
      tween?.kill()
    }
  }, [isOn])

  return (
    <>
      <Box
        as="button"
        css={{
          width: '56px',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',

          svg: {
            width: '72px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }
        }}
        className={clsx(s.menuButton, { [s.menuOpen]: isOn })}
        onClick={handleToggle}
        aria-label="toggle menu"
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path className={s.line1} d="M0 70l28-28c2-2 2-2 7-2h64" />
          <path className={s.line2} d="M0 50h99" />
          <path className={s.line3} d="M0 30l28 28c2 2 2 2 7 2h64" />
        </svg>
      </Box>
      <Portal>
        <Container
          css={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: isOn ? 0 : '100%',
            zIndex: 50,
            backgroundColor: 'black',
            color: 'white',
            pointerEvents: isOn ? 'all' : 'none',
            overflow: 'hidden',
            transition:
              'background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1), bottom .56s cubic-bezier(0.52, 0.16, 0.24, 1) .2s',
            '.stagger': { opacity: 0, transform: 'scale(1, 0.95)' }
          }}
          aria-hidden={!isOn}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              pb: '64px',
              pt: '128px'
            }}
          >
            <Box
              css={{
                maxWidth: '420px'
              }}
            >
              <DownloadButton variant="mobile" className="stagger" />
              <Box
                css={{
                  mt: '32px',
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 1,
                  '.regular': { fontWeight: 400 },
                  '.disabled': { color: 'rgba(255,255,255,0.5)' },
                  'p:not(:last-of-type)': { mb: '8px' }
                }}
              >
                <p className="stagger">
                  <span>Grotesque 800</span> <span>/</span>{' '}
                  <span className="regular">v.1.2</span>
                </p>
                <p className="disabled stagger">
                  <span>Grotesque 400</span> <span>/</span>{' '}
                  <span className="regular">In Progress</span>
                </p>
                <p className="disabled stagger">
                  <span>Grotesque 900</span> <span>/</span>{' '}
                  <span className="regular">In Progress</span>
                </p>
              </Box>
            </Box>
            <Box
              as="a"
              href="https://basement.studio"
              css={{
                textAlign: 'center',
                fontFamily: '$heading',
                fontSize: '20px'
              }}
              className="stagger"
            >
              www.basement.studio
            </Box>
          </Box>
        </Container>
      </Portal>
    </>
  )
}

export default MobileMenu
