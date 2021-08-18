import { styled } from '../../../stitches.config'
import Box from 'components/common/box'
import Container from 'components/layout/container'

export const Text = styled('p', {
  fontFamily: '$body',
  lineHeight: 1,
  color: '$colors$white',

  variants: {
    size: {
      xs: {
        fontSize: '$3'
      },
      sm: {
        fontSize: '$4'
      },
      md: {
        fontSize: '$6',
        letterSpacing: -1
      },
      lg: {
        fontSize: '$9'
      },
      xl: {
        fontSize: '$14',
        lineHeight: 1
      },
      icon: {
        fontSize: '$7'
      }
    },
    centered: {
      true: {
        textAlign: 'center'
      }
    },
    heading: {
      true: {
        fontFamily: '$heading'
      }
    },
    uppercase: {
      true: {
        textTransform: 'uppercase'
      }
    },
    outlined: {
      true: {
        textShadow: `-1px -1px 0 $white,  
          1px -1px 0 $white,
          -1px 1px 0 $white,
           1px 1px 0 $white`,
        color: 'var(--colors-black)'
      }
    },
    tight: {
      true: {
        letterSpacing: -2
      }
    }
  }
})

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
    height: 176,
    background: 'red',

    '@bp2': {
      gridColumn: '1/3',
      height: 254,
      borderRight: '1px solid $colors$white',
      borderBottom: '1px solid $colors$white'
    }
  },
  '.social': {
    gridColumn: '1',
    gridRow: '2',
    borderBottom: '1px solid $colors$white',

    '@bp2': {
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
      height: 46
    }
  }
})

const Social = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 1fr)',
  gridAutoFlow: 'column',
  gap: '5px $4',

  li: {
    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },

    p: {
      background:
        'linear-gradient(to right, black, black), linear-gradient(to right, $colors$white, $colors$white)',
      backgroundSize: '100% 0.1em, 0 0.1em',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 250ms',
      marginRight: '$2'
    },

    '&:hover': {
      p: {
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
      <FooterGrid css={{ mb: 40, '@bp2': { mb: '$6' } }}>
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
                  <Text css={{ fontSize: '$3' }} heading>
                    {label}
                  </Text>

                  <Box css={{ width: 10, height: 10 }} className="arrow">
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
          css={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box
            css={{
              borderRight: '1px solid $colors$white',
              width: '100%'
            }}
            centered
          >
            <Text>Privacy</Text>
          </Box>
          <Box
            css={{
              width: '100%'
            }}
            centered
          >
            <Text>Contact</Text>
          </Box>
        </Box>
        <Box className="legal" centered>
          <Text css={{ fontSize: '$1' }}>
            © basement.studio LLC 2021 all rights reserved
          </Text>
        </Box>
      </FooterGrid>
    </Container>
  )
}

export default Footer
