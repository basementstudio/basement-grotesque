import { styled } from '../../../stitches.config'
import Box from 'components/common/box'
import Container from 'components/layout/container'
import Text from 'components/common/text'
import { ArrowUp } from 'components/primitives/arrow'
import Section from './section'

const FooterGrid = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'repeat(4, auto)',
  border: '1px solid $colors$white',

  '@bp2': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, auto)'
  },

  '.fallingLetters': {
    gridColumn: '1',
    gridRow: '1',
    height: '100%',
    minHeight: 176,

    '@bp2': {
      gridColumn: '1/3',
      height: '100%',
      minHeight: 254,
      borderRight: '1px solid $colors$white',
      borderBottom: '1px solid $colors$white'
    }
  },
  '.social': {
    gridColumn: '1',
    gridRow: '2',
    borderBottom: '1px solid $colors$white',
    height: '100%',
    minHeight: 176,

    '@bp2': {
      height: '100%',
      minHeight: 254,
      gridColumn: '3/5',
      gridRow: '1',
      borderBottom: '1px solid $colors$white'
    }
  },
  '.policies': {
    height: 36,
    gridRow: '3',
    gridColumn: '1/3',

    '@bp2': {
      gridColumn: '1/3',
      gridRow: '2',
      height: 46,
      borderRight: '1px solid $colors$white'
    }
  },
  '.legal': {
    gridColumn: '1',
    gridRow: '4',
    height: 36,
    borderTop: '1px solid $colors$white',

    '@bp2': {
      gridColumn: '3/5',
      gridRow: '2',
      height: 46,
      borderTop: 'none'
    }
  }
})

const Social = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-3px -6px',
  justifyContent: 'space-between',

  '@bp2': {
    margin: '0',
    flexWrap: 'nowrap'
  },

  li: {
    padding: '3px 6px',

    '@bp2': {
      padding: '0'
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },

    'p.label': {
      background:
        'linear-gradient(to right, transparent, transparent), linear-gradient(to right, $colors$white, $colors$white)',
      backgroundSize: '100% 0.1em, 0 0.1em',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 250ms',
      marginRight: '$2'
    },

    '&:hover': {
      'p.label': {
        backgroundSize: '0 0.1em, 100% 0.1em'
      },
      '.arrow': {
        svg: {
          fill: '$colors$white'
        }
      }
    }
  }
})

const FooterLink = styled('a', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    transition: 'background 200ms ease-in',
    background: '$white',

    '.label': {
      color: '$black'
    }
  }
})

const social = [
  {
    label: 'Twitter',
    href: '/'
  },
  {
    label: 'Dribble',
    href: '/'
  },
  {
    label: 'Instagram',
    href: '/'
  },
  {
    label: 'Github',
    href: '/'
  }
]

const Footer = () => {
  return (
    <Section
      css={{
        paddingBottom: 40,
        paddingTop: 48
      }}
      background="muted"
      data-scroll-section
    >
      <Container maxWidth>
        <FooterGrid>
          <Box className="fallingLetters"></Box>
          <Box
            className="social"
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 20
            }}
          >
            <Box>
              <Text
                css={{
                  fontSize: '5.4vw',
                  lineHeight: 1,
                  '@bp2': { fontSize: '2.8vw' }
                }}
                uppercase
                heading
                tight
              >
                Our work is serious,{' '}
                <Text css={{ lineHeight: 1.5 }} heading outlined>
                  we are not.
                </Text>
              </Text>
            </Box>
            <Social css={{ marginTop: '$4' }}>
              {social.map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href}>
                    <Text
                      className="label"
                      css={{ fontSize: '$3', '@bp2': { fontSize: '1.3vw' } }}
                      heading
                    >
                      {label}
                    </Text>

                    <Box
                      css={{
                        width: 10,
                        height: 10,
                        '@bp2': { width: 19, height: 19 }
                      }}
                      className="arrow"
                    >
                      <ArrowUp
                        css={{ $$size: '$3', '@bps': { $$size: '1.3vw' } }}
                      />
                    </Box>
                  </a>
                </li>
              ))}
            </Social>
          </Box>
          <Box
            className="policies"
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '$1',
              '@bp2': { fontSize: '$3' }
            }}
          >
            <FooterLink
              href="/"
              css={{
                borderRight: '1px solid $colors$white'
              }}
            >
              <Text className="label">EULA</Text>
            </FooterLink>
            <FooterLink href="mailto:sayhi@basement.studio">
              <Text className="label">Contact</Text>
            </FooterLink>
          </Box>
          <Box
            className="legal"
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text css={{ fontSize: '$1', '@bp2': { fontSize: '$3' } }}>
              © basement.studio LLC 2021 all rights reserved
            </Text>
          </Box>
        </FooterGrid>
      </Container>
    </Section>
  )
}

export default Footer
