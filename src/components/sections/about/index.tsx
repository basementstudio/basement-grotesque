import { styled } from '../../../../stitches.config'
import GrostesqueAB from '../../../../public/svg/grotesque-ab.svg'

const Container = styled('div', {
  variants: {
    type: {
      'section-container': {
        display: 'block',
        my: '46px',
        backgroundColor: '$white'
      },
      'content-container': {
        gap: '0 8vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        py: '78px',

        '@bp2': {
          flexDirection: 'row'
        },

        svg: {
          px: '28px',
          minWidth: '100%',
          maxWidth: 1000,
          '@bp2': {
            position: 'relative',
            right: '-10%',
            order: 2,
            minWidth: '40%',
            px: 0
          }
        }
      }
    }
  }
})

const Text = styled('p', {
  fontFamily: '$body',
  fontSize: 'clamp($3, 1.35vw, 18px)',
  lineHeight: 'clamp(25px, 1.5vw, 22px)',
  fontWeight: 500,
  color: '$black',

  variants: {
    font: {
      grotesque: {
        fontFamily: '$heading',
        fontSize: '546px',
        lineHeight: '656px',
        fontWeight: 800
      }
    },
    size: {
      bg: {
        fontSize: 'clamp(18px, 2vw, $6)',
        lineHeight: 'clamp(25px, 2.2vw, 39px)'
      },
      sm: {
        fontSize: 14,
        lineHeight: '20px'
      }
    },
    extra: {
      before: {
        '&:before': {
          display: 'none',
          marginRight: '8px',
          content: 'About the font',
          fontSize: '14px',
          lineHeight: '26px',
          textTransform: 'uppercase',
          verticalAlign: 'top',

          '@bp2': {
            display: 'inline'
          }
        }
      }
    }
  }
})

const AboutSection = () => {
  return (
    <Container as="section" type="section-container">
      <Container type="content-container">
        <GrostesqueAB />
        <Container css={{ pl: '40px', maxWidth: 900 }}>
          <Text
            size="sm"
            css={{
              fontWeight: '700',
              ta: 'center',
              textTransform: 'uppercase',
              marginBottom: '48px',
              '@bp2': { display: 'none' }
            }}
          >
            About the font
          </Text>
          <Text size="bg" css={{ marginBottom: '12px' }} extra="before">
            BSMNT Grotesque is the studio’s first venture into the daunting but
            exciting world of type design. Of course, we had to start with a
            heavy weight: striking and unapologetically so; flawed but charming
            and full of character.
          </Text>
          <Text css={{ textIndent: 120 }}>
            We set out inspired by the expressiveness of early 19th-century
            grotesque typefaces and the boldness and striking visuals of the
            contemporary revival of brutalist aesthetics. BSMNT is the first
            step in a very ambitious path we’ve set for ourselves.
          </Text>
          <Text css={{ textIndent: 120 }}>
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
          ta: 'center',
          fontWeight: 800,
          fontFamily: '$heading',
          marginTop: '-24px'
        }}
      >
        ***
      </Text>
    </Container>
  )
}

export default AboutSection
