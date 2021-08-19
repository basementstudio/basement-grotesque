import { styled } from '@stitches/react'
import { range } from 'lib/utils'
import MarqueeComponent from 'react-fast-marquee'

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
    }
  }
})

const FooterGrid = styled('footer', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  height: 520,

  border: '1px solid $colors$white',

  '& > *:not(:last-child)': {
    borderBottom: '1px solid $colors$white'
  },

  '& > *:first-child': {
    borderRight: '1px solid $colors$white'
  },

  '.fallingLetters': {
    gridColumn: '1/3',
    gridRow: '1/9'
  },
  '.social': {
    gridColumn: '3/5',
    gridRow: '1/9'
  },
  '.marqueeSection': {
    gridColumn: '1/5',
    gridRow: '9/10'
  },
  '.links': {
    gridColumn: '1/5',
    gridRow: '10/11'
  }
})

const Social = styled('ul', {
  display: 'grid',
  gridAutoRows: '1fr',
  height: '100%',

  li: {
    a: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 32px',
      height: '100%'
    },

    p: {
      background:
        'linear-gradient(to right, black, black), linear-gradient(to right, $colors$white, $colors$white)',
      backgroundSize: '100% 0.1em, 0 0.1em',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 250ms'
    },

    '&:not(:last-child)': {
      borderBottom: '1px solid $colors$white'
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

const Marquee = styled(MarqueeComponent, {
  height: '100%',

  '.marqueeText': {
    textTransform: 'uppercase',
    padding: '0 24px',
    borderRight: '1px solid $colors$white'
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

const marqueeText = ['basement.studio', 'our work is serious, we are not']

const Footer = () => {
  return (
    <Container data-scroll-section>
      <FooterGrid>
        <div className="fallingLetters"></div>
        <div className="social">
          <Social>
            {social.map(({ label, href }, idx) => (
              <li key={idx}>
                <a href={href}>
                  <Text size="lg" heading>
                    {label}
                  </Text>

                  <span className="arrow">
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-8.49944e-07 6.05556L15.517 6.05556L-1.71675e-07 21.5725L3.92747 25.5L19.4444 9.98302L19.4444 25.5L25 25.5L25 6.05556L25 0.500001L19.4444 0.500001L-1.09278e-06 0.500002L-8.49944e-07 6.05556Z"
                        strokeWidth="1"
                        stroke="white"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </Social>
        </div>
        <div className="marqueeSection">
          <Marquee gradient={false}>
            {range(4).map(() =>
              marqueeText.map((text) => (
                <Text size="sm" className="marqueeText" key={text} heading>
                  {text}
                </Text>
              ))
            )}
          </Marquee>
        </div>
        <div className="links"></div>
      </FooterGrid>
    </Container>
  )
}

export default Footer
