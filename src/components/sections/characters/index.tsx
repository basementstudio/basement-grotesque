import React, { useCallback, useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'

// Primitives
import Section from 'components/layout/section'

// Styles
import { styled } from '../../../../stitches.config'
import toast from 'react-hot-toast'
import Box from 'components/common/box'
import Container from 'components/layout/container'
import SectionHeading from 'components/common/section-heading'
import { toVw } from '../posters'
import { ArrowDown } from 'components/primitives/arrow'

const DesktopOnlyBox = styled('div', {
  display: 'none',
  '@bp2': {
    display: 'block'
  }
})
const SectionInner = styled(Container, {
  color: '$white',
  pt: '128px',
  position: 'relative'
})

const MobileSection = styled('div', {
  background: '$black',
  color: '$white',
  py: '40px',

  '@bp2': {
    display: 'none'
  }
})

const Glyph = ({
  onClick,
  children
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      css={{
        position: 'relative',
        background: '$white',
        fontFamily: '$heading',
        color: '$black',
        transition: 'background .15s, color .15s, transform .25s',
        outline: 'none',
        userSelect: 'none',
        border: '1px solid $black',
        transformOrigin: 'center center',
        fontSize: '32px',
        width: '90px',
        pb: `calc(100% - 2px)`,
        '@bp2': {
          width: '100%',
          pb: `100%`,
          fontSize: `min(40px, ${toVw(32)})`,
          '&:nth-of-type(12n)': {
            transformOrigin: 'right center'
          },
          '&:nth-of-type(12n+1)': {
            transformOrigin: 'left center',
            zIndex: 1
          }
        },
        '&:hover': {
          transform: 'scale(1.25)',
          background: '$black',
          borderColor: '$white',
          color: '$white'
        },
        '&:focus': {
          outline: 'none'
        },
        '> span': {
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      <span>{children}</span>
    </Box>
  )
}

const glyphs = `AÁÂÄÀÅÃÆBCÇDÐEÉÊËÈFGHIÍÎÏÌJKLMNÑOÓÔÖÒØÕŒPÞQRSẞTUÚÛÜÙVWẂŴẄẀXYÝŶŸỲZaáâäàåãæbcçdðeéêëèfghiíîïìĳjklmnñoóôöòøõœpþqrsßtuúûüùvwẃŵẅẁxyýŷÿỳz̈̇.,:;…&†‡¶!¡?¿·•*#/\\-–—_(){}[]‚„“”‘’«»‹›"'01234567890123456789@`
const mobileGlyphs = glyphs + `ẞT`

const CharactersSection = () => {
  const [viewAll, setViewAll] = useState(false)
  const [gridHeight, setGridHeight] = useState<number>()
  const gridRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleResize = () => {
      if (!gridRef.current) return
      setGridHeight(gridRef.current.offsetHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Section background="black">
      <SectionInner css={{ pb: viewAll ? '128px' : '0px' }} autoPy maxWidth>
        <Box
          css={{
            position: 'relative',
            py: '64px',
            mb: '64px',
            '@bp2': {
              py: '128px',
              mb: '128px'
            }
          }}
        >
          <Box
            css={{
              position: 'absolute',
              pointerEvents: 'none',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
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
            as="p"
            css={{
              fontFamily: '$heading',
              fontSize: '48px',
              fontWeight: 800,
              wordBreak: 'break-all',
              textAlign: 'center',
              lineHeight: '1',
              maxWidth: '1280px',
              margin: 'auto',

              '@bp2': {
                fontSize: '88px'
              }
            }}
            data-scroll-speed={-0.6}
            data-scroll
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789!?&
          </Box>
        </Box>
        <SectionHeading
          title="Characters"
          subtitle={
            <>
              412 glyphs
              <br />
              Black (800)
              <br />
              OTF
            </>
          }
        />
        <DesktopOnlyBox
          css={{
            transition: gridHeight ? `height ${gridHeight / 4000}s` : undefined,
            height: viewAll ? gridHeight : '570px',
            overflow: 'hidden'
          }}
        >
          <Box
            ref={gridRef}
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridColumnGap: `min(18px, ${toVw(16)})`,
              gridRowGap: `min(18px, ${toVw(16)})`,
              overflow: 'hidden',
              pt: '80px',
              pb: '30px'
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
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              background: '$white',
              color: '$black',
              borderTop: '1px solid $black',
              py: '24px',
              textTransform: 'uppercase',
              '&:focus': {
                outline: 'none'
              },
              fontFamily: '$heading',
              svg: {
                ml: '8px',
                transition: 'all 250ms',
                fill: 'currentColor',
                color: '$black'
              }
            }}
          >
            {viewAll ? 'View Less' : 'View All'}{' '}
            <ArrowDown
              css={{
                color: 'black',
                path: { stroke: 'black' },
                $$size: '15px'
              }}
            />
          </Box>
        )}
      </DesktopOnlyBox>
      <MobileSection>
        <Marquee gradient={false} speed={50}>
          <Box
            css={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 1fr)',
              gridColumnGap: '16px',
              gridRowGap: '16px',
              overflow: 'hidden',
              gridAutoFlow: 'column',
              mx: '8px',
              py: '20px'
            }}
          >
            {mobileGlyphs.split('').map((glyph, i) => (
              <Glyph key={i} onClick={handleCopyGlyph}>
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
