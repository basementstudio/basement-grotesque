import { useCallback, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

// Primitives
import Section from 'components/primitives/section'

// Styles
import { styled } from '../../../../stitches.config'
import { gsap } from 'lib/gsap'

const Box = styled('div', {})
const DesktopOnlyBox = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'block'
  }
})
const SectionInner = styled('section', {
  background: '$black',
  color: '$white',
  px: '40px',
  pt: '128px'
})

const MobileSection = styled('section', {
  background: '$black',
  color: '$white',
  py: '80px',

  '@bp3': {
    display: 'none'
  }
})

const Glyph = styled('div', {
  background: '$white',
  fontFamily: '$heading',
  color: '$black',
  fontSize: '$7',
  height: '120px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      fixed: {
        width: '91px'
      }
    }
  }
})

const glyphs = `AÁÂÄÀÅÃÆBCÇDÐEÉÊËÈFGHIÍÎÏÌJKLMNÑOÓÔÖÒØÕŒPÞQRSẞTUÚÛÜÙVWẂŴẄẀXYÝŶŸỲZaáâäàåãæbcçdðeéêëèfghiíîïìĳjklmnñoóôöòøõœpþqrsßtuúûüùvwẃŵẅẁxyýŷÿỳz̈̇.,:;…&†‡¶!¡?¿·•*#/\\-–—_(){}[]‚„“”‘’«»‹›"'01234567890123456789`
const mobileGlyphs = glyphs + `ẞT`

const CharactersSection = () => {
  const [viewAll, setViewAll] = useState(false)

  const handleToggleViewAll = useCallback(() => setViewAll((p) => !p), [])

  const parallaxIt = useCallback((e, element, movement) => {
    const pos = {
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5
    }

    gsap.to(element, {
      rotationX: pos.y * movement,
      rotationY: pos.x * movement
    })
  }, [])

  useEffect(() => {
    const section = document.querySelector('.glyph__section')
    const glyphs = gsap.utils.toArray(document.querySelectorAll('.glyph'))

    if (!section || !glyphs) return

    //@ts-ignore
    gsap.set(glyphs[0].parentElement, { perspective: 600 })

    section.addEventListener('mousemove', (e) => {
      glyphs.forEach((element) => {
        parallaxIt(e, element, 60)
      })
    })
  }, [parallaxIt])

  return (
    <Section>
      <SectionInner
        css={{ pb: viewAll ? '128px' : '0px' }}
        className="glyph__section"
      >
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            as="h2"
            css={{
              fontFamily: '$heading',
              fontSize: '$11',
              textTransform: 'uppercase',
              fontWeight: 800
            }}
          >
            Characters
          </Box>
          <Box
            as="p"
            css={{
              textAlign: 'right',
              fontWeight: 500,
              textTransform: 'uppercase'
            }}
          >
            412 glyphs
            <br />
            Black (800)
            <br />
            OTF
          </Box>
        </Box>
        <DesktopOnlyBox>
          <Box
            css={{
              pt: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridColumnGap: '24px',
              gridRowGap: '16px',
              height: viewAll ? 'auto' : '570px',
              overflow: 'hidden'
            }}
          >
            {glyphs.split('').map((glyph, i) => (
              <Glyph key={i} className="glyph">
                {glyph}
              </Glyph>
            ))}
          </Box>
        </DesktopOnlyBox>
      </SectionInner>
      <DesktopOnlyBox>
        {!viewAll && (
          <Box
            as="button"
            onClick={handleToggleViewAll}
            css={{
              appearance: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              background: '$white',
              color: '$black',
              borderTop: '1px solid $black',
              paddingTop: '24px',
              paddingBottom: '32px',
              textTransform: 'uppercase'
            }}
          >
            <span>{viewAll ? 'View Less' : 'View All'}</span>
            <svg
              width="22"
              height="10"
              viewBox="0 0 22 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginTop: '8px',
                transform: viewAll ? 'rotate(180deg)' : 'none'
              }}
            >
              <path
                d="M11 10.0002L0.607696 0.250246L21.3923 0.250244L11 10.0002Z"
                fill="#101010"
              />
            </svg>
          </Box>
        )}
      </DesktopOnlyBox>
      <MobileSection>
        <Marquee gradient={false} speed={50}>
          <Box
            css={{
              pt: '80px',
              display: 'grid',
              gridTemplateRows: 'repeat(4, 1fr)',
              gridColumnGap: '24px',
              gridRowGap: '16px',
              overflow: 'hidden',
              gridAutoFlow: 'column',
              mx: '12px'
            }}
          >
            {mobileGlyphs.split('').map((glyph, i) => (
              <Glyph key={i} size="fixed">
                {glyph}
              </Glyph>
            ))}
          </Box>
        </Marquee>
      </MobileSection>
    </Section>
  )
}

export default CharactersSection
