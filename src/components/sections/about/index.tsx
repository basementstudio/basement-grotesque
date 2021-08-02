import { styled } from '../../../../stitches.config'

const Container = styled('div', {
  variants: {
    type: {
      section: {
        display: 'block',
        mt: 160,
        mb: 120,
        backgroundColor: '$white',
        '@bp2': {
          mt: 100
        }
      },
      content: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '1920px',
        mx: 'auto',
        '@bp2': {
          flexDirection: 'row'
        }
      },
      GrotesqueABText: {
        display: 'flex',
        mb: '80px',
        '@bp2': {
          mb: 0,
          order: 2,
          p: 0
        }
      }
    }
  }
})

const Text = styled('p', {
  fontFamily: '$body',
  fontSize: 'clamp($3, 1.35vw, $4)',
  lineHeight: 'clamp(25px, 1.5vw, 22px)',
  fontWeight: 500,
  color: '$black',

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

const GrotesqueABText = styled('span', {
  position: 'relative',
  right: 0,
  fontFamily: '$heading',
  fontSize: 'clamp(200px, 30vw, 546.286px)',
  lineHeight: '1',
  letterSpacing: '-0.12em',
  color: '$white',
  textShadow:
    '$black 1.5px 0px 0px, $black -1.5px 0px 0px, $black 0px 1.5px 0px, $black 0px -1.5px 0px, $black 1.5px 1.5px, $black -1.5px -1.5px 0px, $black 1.5px -1.5px 0px, $black -1.5px 1.5px 0px',
  '@bp2': {
    right: '-10%'
  },
  '&:after': {
    content: 'Ab',
    position: 'absolute',
    bottom: '-6%',
    right: '-4%',
    color: '$black'
  }
})

const AboutSection = () => {
  return (
    <Container as="section" type="section">
      <Container type="content">
        <Container type="GrotesqueABText">
          <GrotesqueABText css={{ mx: 'auto', '@bp2': { mx: 0 } }}>
            Ab
          </GrotesqueABText>
        </Container>
        <Container
          css={{ '@bp2': { p: 0, pl: '40px' }, px: '28px', maxWidth: 900 }}
        >
          <Text
            size="sm"
            css={{
              fontWeight: '700',
              ta: 'center',
              textTransform: 'uppercase',
              marginBottom: '48px',
              '@bp2': { marginBottom: '-0px', ta: 'left', fontWeight: '500' }
            }}
          >
            About the font
          </Text>
          <Text
            size="bg"
            css={{
              marginBottom: 48,
              '@bp2': { marginBottom: 12, textIndent: 140 }
            }}
          >
            BSMNT Grotesque is the studio’s first venture into the daunting but
            exciting world of type design. Of course, we had to start with a
            heavy weight: striking and unapologetically so; flawed but charming
            and full of character.
          </Text>
          <Text
            css={{
              textIndent: 90,
              mb: 16,
              '@bp2': {
                textIndent: 0,
                mb: 20,
                ml: 'min(8.5vw, 120px)'
              }
            }}
          >
            We set out inspired by the expressiveness of early 19th-century
            grotesque typefaces and the boldness and striking visuals of the
            contemporary revival of brutalist aesthetics. BSMNT is the first
            step in a very ambitious path we’ve set for ourselves.
          </Text>
          <Text
            css={{
              textIndent: 90,
              '@bp2': {
                textIndent: 0,
                ml: 'min(8.5vw, 120px)'
              }
            }}
          >
            The typeface is a work in progress, open to anyone who shares our
            visual and graphic sensibilities. You're invited to check our
            journey as we iterate, change, and add new weights and widths in the
            future as we learn by doing.
          </Text>
        </Container>
      </Container>
      <Text
        size="bg"
        css={{
          mt: 30,
          ta: 'center',
          fontWeight: 800,
          fontFamily: '$heading'
        }}
      >
        ***
      </Text>
    </Container>
  )
}

export default AboutSection
