import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Section from 'components/layout/section'
import { styled } from '../../../stitches.config'
import Container from 'components/layout/container'
import { DURATION, gsap, SplitText } from 'lib/gsap'
import Box from 'components/common/box'
import { StyledAspectBox } from 'components/common/aspect-box'
import { toVw } from './posters'

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

const Divisor = styled('div', {
  width: '100%',
  height: 56,

  '@bp2': {
    height: 96
  }
})

const RomePreview = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    gsap.set('.rome-preview__section', {
      autoAlpha: 0
    })
  }, [])

  useEffect(() => {
    if (!inView) return

    const title = new SplitText('.rome-preview__title', {
      type: 'lines,words,chars'
    })

    const subtitle = new SplitText('.rome-preview__subtitle', {
      type: 'lines,words,chars'
    })

    const items = document.querySelectorAll('.rome-preview__items')[0]
      .childNodes

    const tl = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })
    tl.to('.rome-preview__section', {
      autoAlpha: 1,
      duration: DURATION / 2
    })
    tl.in(title.words)
    tl.from(
      '.rome-preview__svg',
      {
        autoAlpha: 0,
        y: 30
      },
      '< 30%'
    )
    tl.in(subtitle.lines, '>-30%')
    tl.from(items, {
      autoAlpha: 0,
      y: 30,
      stagger: 0.1
    })

    tl.timeScale(1.2).play()

    return () => {
      tl.kill()
    }
  }, [inView])

  return (
    <Section background="black" css={{ pt: '64px' }}>
      <Container
        className="rome-preview__section"
        css={{ maxWidth: '1800px', mx: 'auto' }}
        ref={ref}
      >
        <Text size="icon" centered className="rome-preview__svg">
          †
        </Text>
        <ContentContainer size="sm" centered>
          <Text
            className="rome-preview__title"
            size="lg"
            css={{ marginTop: 20, textTransform: 'uppercase' }}
            centered
          >
            Lëtzebuerg
            <br />
            Moscow
            <br />
            Genève
            <br />
            Roma
          </Text>
        </ContentContainer>
        <Text
          size="icon"
          css={{ marginTop: 24 }}
          centered
          className="rome-preview__svg"
        >
          ‡
        </Text>
        <Divisor />
        <ContentContainer size="lg" centered>
          <ContentContainer size="sm">
            <Text size="md" className="rome-preview__subtitle">
              CATACOMBS, ALTHOUGH MOST NOTABLE AS UNDERGROUND PASSAGEWAYS AND
              CEMETERIES, ALSO HOUSE MANY DECORATIONS.
            </Text>
          </ContentContainer>
          <ColumnedContent
            css={{ marginTop: 80 }}
            className="rome-preview__items"
          >
            <ContentContainer
              css={{
                background: '$background',
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
      <Container
        css={{ background: '$background', '@bp1': { background: 'black' } }}
        maxWidth
      >
        <Container
          css={{
            mt: '64px',
            background: '$background',
            padding: 0,
            '@bp1': {
              padding: `min(40px, ${toVw(40)})`
            }
          }}
        >
          <Box
            css={{
              display: 'grid',
              '@bp1': { gridTemplateColumns: '1fr 1fr' }
            }}
          >
            {[
              {
                label: (
                  <>
                    MANY ACCENTS,
                    <br />
                    OBVIOUSLY
                  </>
                ),
                children: (
                  <>
                    <span>aàáâä</span>
                    <br />
                    <span className="ss01">aàáâä</span>
                    <br />
                    <span className="ss02">aàáâä</span>
                  </>
                )
              },
              {
                label: (
                  <>
                    CAPITAL VARIABLES,
                    <br />
                    BECAUSE, WHY NOT?
                  </>
                ),
                background: 'white',
                color: 'black',
                invertSelection: true,
                children: (
                  <>
                    <span>R</span>
                    <span className="ss01">R</span>
                    <span className="ss02">R</span>
                    <span className="ss03">R</span>
                    <br />
                    <span>G</span>
                    <span className="ss01">G</span>
                    <br />
                    <span>Q</span>
                    <span className="ss01">Q</span>
                  </>
                )
              },
              {
                label: null,
                hideOnDesktop: true,
                children: (
                  <>
                    <span>1918-2021</span>
                    <br />
                    <span>£ 206.10</span>
                    <br />
                    <span>€ 37,00</span>
                  </>
                )
              }
            ].map(
              (
                {
                  label,
                  background,
                  color,
                  children,
                  invertSelection,
                  hideOnDesktop
                },
                i
              ) => {
                return (
                  <StyledAspectBox
                    key={i}
                    ratio={680 / 587}
                    className={invertSelection ? 'invert-selection' : ''}
                    css={{
                      background,
                      color,
                      position: 'relative',
                      label: {
                        position: 'absolute',
                        top: `min(24px, ${toVw(24)})`,
                        right: `min(32px, ${toVw(32)})`,
                        textAlign: 'right',
                        fontWeight: 500,
                        lineHeight: 1.25,
                        userSelect: 'none',
                        fontSize: `min(16px, ${toVw(16)})`,
                        display: 'none'
                      },
                      '@bp1': {
                        display: hideOnDesktop ? 'none' : 'block',
                        label: {
                          display: 'block'
                        }
                      }
                    }}
                  >
                    <label>{label}</label>
                    <Box
                      as="p"
                      className="children"
                      css={{
                        width: '100%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontFamily: '$heading',
                        letterSpacing: '0.04em',
                        lineHeight: 1,
                        textAlign: 'center',
                        fontSize: `min(56px, ${toVw(52, 375)})`,
                        '@bp1': {
                          fontSize: `min(112px, ${toVw(112)})`
                        }
                      }}
                    >
                      {children}
                    </Box>
                  </StyledAspectBox>
                )
              }
            )}
          </Box>
          <Box
            css={{
              display: 'none',
              textAlign: 'center',
              py: `min(120px, ${toVw(120)})`,
              mt: `min(40px, ${toVw(40)})`,
              label: {
                fontWeight: 500,
                lineHeight: 1.25,
                userSelect: 'none',
                mt: '24px',
                fontSize: `min(16px, ${toVw(16)})`,
                display: 'none'
              },
              '@bp1': {
                display: 'block',
                label: {
                  display: 'block'
                }
              }
            }}
          >
            <Box
              css={{
                fontFamily: '$heading',
                letterSpacing: '0.04em',
                lineHeight: 1,
                fontSize: `min(56px, ${toVw(55, 375)})`,
                '@bp1': {
                  fontSize: `min(112px, ${toVw(112)})`
                }
              }}
            >
              <span>1918-2021</span>
              <br />
              <span>£ 206.10</span>
              <br />
              <span>€ 37,00</span>
            </Box>
            <label>WHO NEEDS NUMBERS?</label>
          </Box>
        </Container>
      </Container>
    </Section>
  )
}

export default RomePreview
