import React from 'react'
import Section from 'components/layout/section'
import { styled } from '../../../stitches.config'
import Container from 'components/layout/container'

const ContentContainer = styled('div', {
  width: '100%',

  variants: {
    size: {
      sm: {
        maxWidth: 900
      },
      lg: {
        maxWidth: 1130
      }
    },
    centered: {
      true: {
        margin: '0 auto'
      }
    }
  }
})

const ColumnedContent = styled('div', {
  display: 'grid',
  gap: '48px 24px',
  '@bp2': {
    gridTemplateColumns: '1fr 1fr'
  }
})

const Text = styled('p', {
  fontFamily: '$heading',
  lineHeight: 1,

  variants: {
    size: {
      sm: {
        letterSpacing: -1,
        fontSize: '18px',
        '@bp2': {
          fontSize: '$6'
        }
      },
      md: {
        fontSize: '24px',
        '@bp2': {
          fontSize: '$9'
        }
      },
      lg: {
        fontSize: 'clamp(40px, 8vw, 112px)',
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
    }
  }
})

const Divisor = styled('hr', {
  width: '100%',
  margin: '18px 0 80px 0',
  borderTop: '1px solid $black'
})

const RomePreview = () => {
  return (
    <Section background="black" css={{ py: '64px' }}>
      <Container css={{ maxWidth: '1800px', mx: 'auto' }}>
        <Text size="icon" centered>
          †
        </Text>
        <ContentContainer size="sm" centered>
          <Text size="lg" css={{ marginTop: 20 }} centered>
            HAMBURG <br /> MOSKOW <br /> GENÈVE <br /> ROMA
          </Text>
        </ContentContainer>
        <Text size="icon" css={{ marginTop: 24 }} centered>
          ‡
        </Text>
        <Divisor />
        <ContentContainer size="lg" centered>
          <ContentContainer size="sm">
            <Text size="md">
              CATACOMBS, ALTHOUGH MOST NOTABLE AS UNDERGROUND PASSAGEWAYS AND
              CEMETERIES, ALSO HOUSE MANY DECORATIONS.
            </Text>
          </ContentContainer>
          <ColumnedContent css={{ marginTop: 84 }}>
            <ContentContainer
              css={{
                background: '$black',
                color: '#FDFDFD',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxHeight: 168
              }}
            >
              <span>
                <svg
                  width="119"
                  height="168"
                  viewBox="0 0 119 168"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.9082 91.3575C56.2204 97.9133 49.9768 106.342 38.1141 109.464L25.0027 107.279C-5.59058 101.972 -11.8341 96.9767 -11.8341 85.4262C-12.1463 78.8705 -5.90276 70.4417 5.95995 67.32L19.0714 69.5052C49.6647 74.8122 55.9082 79.807 55.9082 91.3575ZM-74.2694 94.7915C-74.2694 113.834 -67.0893 130.692 -37.1204 139.433C-21.1994 144.115 -6.83928 147.861 26.8758 152.856C47.1673 155.978 55.9082 159.724 55.9082 171.899C55.9082 186.884 52.7864 188.444 23.4418 188.444C-6.83928 188.444 -10.2732 185.947 -10.2732 156.915H-69.5868C-69.5868 215.604 -50.544 229.027 26.2514 229.027C99.9251 229.027 118.343 217.165 118.343 169.402C118.343 144.428 111.788 130.38 86.1893 120.702C83.0675 119.453 79.3214 118.205 75.5753 117.268C106.481 116.956 118.343 106.342 118.343 81.9922C118.343 62.9495 111.163 46.0919 81.1945 37.351C65.2735 32.6684 50.9134 28.9222 17.1983 23.9274C-3.09317 20.8056 -11.8341 17.0595 -11.8341 4.88465C-11.8341 -10.0998 -8.71234 -11.6607 20.6322 -11.6607C50.9134 -11.6607 54.3473 -9.16329 54.3473 19.8691H113.661C113.661 -38.82 94.6181 -52.2437 17.8227 -52.2437C-55.851 -52.2437 -74.2694 -40.3809 -74.2694 7.38207C-74.2694 32.3562 -67.7137 46.4041 -42.1152 56.0816C-38.9935 57.3303 -35.2473 58.579 -31.5012 59.5155C-63.3432 59.8277 -74.2694 70.4417 -74.2694 94.7915Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </span>
              <Text css={{ fontSize: '$13', lineHeight: 1, marginRight: 24 }}>
                ¶
              </Text>
            </ContentContainer>
            <div>
              <Text size="sm">
                There are thousands of decorations in the centuries-old
                catacombs of Rome, catacombs of Paris, and other known and
                unknown catacombs, some of which include inscriptions,
                paintings, statues, ornaments, and other items placed in the
                graves over the years.
              </Text>
            </div>
          </ColumnedContent>
        </ContentContainer>
      </Container>
    </Section>
  )
}

export default RomePreview
