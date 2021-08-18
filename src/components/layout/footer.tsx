import { styled } from '@stitches/react'
import Box from 'components/common/box'

const Container = styled('div', {
  padding: '0px 40px 32px 40px',
  background: '$colors$black'
})

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
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(7, 1fr)',
  height: 300,

  border: '1px solid $colors$white',

  '.fallingLetters': {
    gridColumn: '1/3',
    gridRow: '1/7',
    borderRight: '1px solid $colors$white',
    borderBottom: '1px solid $colors$white'
  },
  '.social': {
    gridColumn: '3/5',
    gridRow: '1/7',
    borderBottom: '1px solid $colors$white'
  },
  '.legal': {
    gridColumn: '3/5',
    gridRow: '7'
  },
  '.policies': {
    gridColumn: '1/3',
    gridRow: '7',
    borderRight: '1px solid $colors$white'
  }
})

const Social = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',

  li: {
    '&:not(:last-child)': {
      marginRight: '$4'
    },
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
          <Box>
            <Social>
              {social.map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href}>
                    <Text size="md" heading>
                      {label}
                    </Text>

                    <span className="arrow">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4242 6.85354L2.98488 18.2929L0.707107 16.0151L12.1465 4.57578L13 3.72222L11.7929 3.72222L0.499999 3.72222L0.499999 0.5L14.7778 0.499999L18.5 0.499999L18.5 4.22222L18.5 18.5L15.2778 18.5L15.2778 7.2071L15.2778 5.99999L14.4242 6.85354Z"
                          stroke="white"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </Social>
          </Box>
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
          <Text>© basement.studio LLC 2021 all rights reserved</Text>
        </Box>
      </FooterGrid>
    </Container>
  )
}

export default Footer
