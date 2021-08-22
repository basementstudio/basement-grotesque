// Primitives
import Box from 'components/common/box'
import Container from 'components/layout/container'
import Section from 'components/layout/section'

// Styles
import { styled } from '../../../../stitches.config'
import AbAnimation from './ab-animation'

const Text = styled('p', {
  fontFamily: '$body',
  fontSize: 'clamp($3, 1.35vw, $4)',
  lineHeight: 'clamp(25px, 1.5vw, 22px)',
  fontWeight: 500,
  b: {
    fontFamily: '$heading'
  },

  variants: {
    size: {
      bg: {
        fontSize: 'clamp($4, 2vw, $7)',
        lineHeight: 'clamp($5, 2.2vw, $8)'
      },
      sm: {
        fontSize: '$2',
        lineHeight: '$4',
        '@bp2': {
          fontSize: '$3',
          lineHeight: '$5'
        }
      }
    }
  }
})

const AboutSection = () => {
  return (
    <Section id="about-section" background="black" css={{ pt: '128px' }}>
      <Container autoPy css={{ pb: 0 }} maxWidth>
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            '@bp2': {
              gridTemplateColumns: '1fr 1fr'
            }
          }}
        >
          <Box
            css={{
              maxWidth: 708,
              gridRowStart: 2,
              '@bp2': { gridRowStart: 'initial' }
            }}
          >
            <Text
              size="bg"
              css={{
                marginBottom: 48,
                '@bp2': { marginBottom: 28 }
              }}
            >
              <b>Basement Grotesque</b> is the studio’s first venture into the
              daunting but exciting world of type design. Of course, we had to
              start with a heavyweight: striking and unapologetically so; flawed
              but charming and full of character.
            </Text>
            <Text
              css={{
                textIndent: 90,
                mb: 16,
                '@bp2': {
                  textIndent: 0,
                  mb: 20
                }
              }}
            >
              We set out inspired by the expressiveness of early 19th-century
              grotesque typefaces and the boldness and striking visuals of the
              contemporary revival of brutalist aesthetics. Grotesque is the
              first step in a very ambitious path we’ve set for ourselves.
            </Text>
            <Text
              css={{
                textIndent: 90,
                '@bp2': {
                  textIndent: 0
                }
              }}
            >
              The typeface is a work in progress, open to anyone who shares our
              visual and graphic sensibilities. You're invited to check our
              journey as we iterate, change, and add new weights and widths in
              the future as we learn by doing.
            </Text>
          </Box>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              '@bp2': { margin: '-128px -128px -128px -32px' }
            }}
          >
            <AbAnimation />
          </Box>
        </Box>
        <Box
          css={{
            ta: 'center',
            fontWeight: 800,
            fontFamily: '$heading',
            fontSize: 'clamp($4, 2vw, $7)',
            lineHeight: 'clamp($5, 2.2vw, $8)',
            mt: '64px',
            '@bp2': {
              mt: '128px'
            }
          }}
        >
          ***
        </Box>
      </Container>
    </Section>
  )
}

export default AboutSection
