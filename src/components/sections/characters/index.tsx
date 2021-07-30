import { useCallback, useState } from 'react'
import { styled } from '../../../../stitches.config'

const Box = styled('div', {})
const Section = styled('section', {
  background: 'black',
  color: 'white',
  px: '40px',
  pt: '128px'
})

const Glyph = styled('div', {
  background: 'white',
  fontFamily: '$heading',
  color: 'black',
  fontSize: '32px',
  height: '120px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const glyphs = `AÁÂÄÀÅÃÆBCÇDÐEÉÊËÈFGHIÍÎÏÌJKLMNÑOÓÔÖÒØÕŒPÞQRSẞTUÚÛÜÙVWẂŴẄẀXYÝŶŸỲZaáâäàåãæbcçdðeéêëèfghiíîïìĳjklmnñoóôöòøõœpþqrsßtuúûüùvwẃŵẅẁxyýŷÿỳz̈̇.,:;…&†‡¶!¡?¿·•*#/\\-–—_(){}[]‚„“”‘’«»‹›"'01234567890123456789`

const CharactersSection = () => {
  const [viewAll, setViewAll] = useState(false)

  const handleToggleViewAll = useCallback(() => setViewAll((p) => !p), [])

  return (
    <>
      <Section css={{ pb: viewAll ? '128px' : '0px' }}>
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
              fontSize: '64px',
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
          {glyphs.split('').map((glyph) => (
            <Glyph key={glyph}>{glyph}</Glyph>
          ))}
        </Box>
      </Section>
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
            background: 'white',
            color: 'black',
            borderTop: '1px solid black',
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
    </>
  )
}

export default CharactersSection
