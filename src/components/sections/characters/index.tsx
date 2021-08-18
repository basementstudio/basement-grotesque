import { useCallback, useState } from 'react'
import Marquee from 'react-fast-marquee'

// Primitives
import Section from 'components/primitives/section'

// Styles
import { styled } from '../../../../stitches.config'
import toast from 'react-hot-toast'

const Box = styled('div', {})
const DesktopOnlyBox = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'block'
  }
})
const SectionInner = styled('div', {
  background: '$black',
  color: '$white',
  px: '40px',
  pt: '128px',
  position: 'relative'
})

const MobileSection = styled('div', {
  background: '$black',
  color: '$white',
  py: '80px',

  '@bp3': {
    display: 'none'
  }
})

const Glyph = styled('button', {
  background: '$white',
  fontFamily: '$heading',
  color: '$black',
  fontSize: '$7',
  height: '120px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background .15s, color .15s',
  outline: 'none',
  '&:hover': {
    background: '$black',
    color: '$white'
  },
  '&:focus': {
    outline: 'none'
  },

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

  const handleCopyGlyph: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(async (e) => {
      const glyph = e.currentTarget.innerText
      try {
        await navigator.clipboard.writeText(glyph)
        toast.success(`Copied to clipboard`, {
          icon: glyph,
          style: {
            borderRadius: '10px',
            backgroundColor: 'black',
            color: 'white'
          }
        })
      } catch (error) {
        toast.error(`Failed to copy ${glyph} to clipboard`, {
          style: {
            borderRadius: '10px',
            backgroundColor: 'black',
            color: 'white'
          }
        })
      }
    }, [])

  return (
    <Section>
      <SectionInner css={{ pb: viewAll ? '128px' : '0px' }}>
        <Box
          css={{
            position: 'absolute'
          }}
        >
          <svg
            width="638"
            height="810"
            viewBox="0 0 638 810"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M528.721 68.2758C543.566 77.5248 551.979 95.6945 554.372 120.803C556.765 145.901 553.132 177.835 543.988 214.45C525.702 287.673 485.406 379.5 427.425 472.562C369.443 565.624 304.776 642.267 247.108 690.953C218.272 715.299 191.208 732.635 167.624 741.549C144.031 750.466 124.013 750.923 109.168 741.674C94.3235 732.425 85.9114 714.255 83.5175 689.147C81.1245 664.049 84.758 632.115 93.9019 595.5C112.188 522.277 152.484 430.45 210.465 337.388C268.447 244.326 333.114 167.683 390.782 118.997C419.618 94.6513 446.682 77.3151 470.266 68.4012C493.859 59.4839 513.877 59.0269 528.721 68.2758Z"
              stroke="white"
            />
          </svg>
        </Box>
        <Box
          as="h3"
          css={{
            fontFamily: '$heading',
            fontSize: '88px',
            textTransform: 'uppercase',
            fontWeight: 800,
            wordBreak: 'break-all',
            textAlign: 'center',
            lineHeight: '1'
          }}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789!?&
        </Box>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            as="h3"
            css={{
              fontFamily: '$body',
              fontSize: '32px',
              textTransform: 'uppercase',
              fontWeight: 500
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
              <Glyph key={i} onClick={handleCopyGlyph}>
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
