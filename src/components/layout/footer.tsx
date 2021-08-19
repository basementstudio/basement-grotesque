import { styled } from '../../../stitches.config'
import Box from 'components/common/box'
import Container from 'components/layout/container'
import Text from 'components/common/text'

const FooterGrid = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'repeat(4, auto)',
  border: '1px solid $colors$white',
  mb: 40,
  mt: 48,

  '@bp2': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    mb: '$6'
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

  '@bp2': {
    margin: '-$2 -$3'
  },

  li: {
    padding: '3px 6px',

    '@bp2': {
      padding: '$2 $3'
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },

    'p.label': {
      background:
        'linear-gradient(to right, $black, $black), linear-gradient(to right, $colors$white, $colors$white)',
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
    <Container>
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
              css={{ fontSize: 23, '@bp2': { fontSize: 45 } }}
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
                    css={{ fontSize: '$3', '@bp2': { fontSize: '$6' } }}
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
                    <svg
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4242 6.85354L2.98488 18.2929L0.707107 16.0151L12.1465 4.57578L13 3.72222L11.7929 3.72222L0.499999 3.72222L0.499999 0.5L14.7778 0.499999L18.5 0.499999L18.5 4.22222L18.5 18.5L15.2778 18.5L15.2778 7.2071L15.2778 5.99999L14.4242 6.85354Z"
                        stroke="white"
                      />
                    </svg>
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
          <Box
            css={{
              borderRight: '1px solid $colors$white',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Privacy</Text>
          </Box>
          <Box
            css={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Contact</Text>
          </Box>
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
  )
}

export default Footer
