import { useCallback } from 'react'
import Image from 'next/image'

// Context
import { useLocomotiveScroll } from 'context/locomotive-scroll'

// Layout
import Section from 'components/layout/section'

// Primitives
import Button from 'components/primitives/button'

// Constants
import { DURATION } from 'lib/gsap'

// Styles
import { styled } from '../../../../stitches.config'

// Images
import label from '../../../../public/images/labelhero.png'

// Icons
import ArrowDown from 'components/primitives/arrow-down'

const Title = styled('h1', {
  color: '$white',
  fontFamily: '$heading',
  fontKerning: 'none',
  fontSize: '$10',
  letterSpacing: '-2px',
  lineHeight: '1',
  marginLeft: '-0.347vw',
  overflow: 'hidden',
  textAlign: 'center',
  textTransform: 'uppercase',

  '@bp1': {
    fontSize: 'max($9, 13.750vw)',
    letterSpacing: '-0.833vw'
  },

  em: {
    display: 'inline-block',
    fontKerning: 'none',
    fontStyle: 'normal',
    transform: 'translateY(-38%)'
  }
})

const Outlined = styled('span', {
  backgroundPosition: '48% 36%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '102%',
  color: '$black',
  display: 'inline-block',
  letterSpacing: '-1px',
  marginTop: '5.736vw',
  paddingRight: '0.6vw',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '0.115vw white',

  '@bp1': {
    letterSpacing: '-0.694vw'
  }
})

const Subtitle = styled(Button, {
  alignItems: 'center',
  color: '$white',
  display: 'flex',
  fontSize: 'max($4, 1.667vw)',
  fontWeight: '700',
  marginTop: 'max($3, 1.667vw)',

  svg: {
    marginLeft: '$2'
  }
})

const Wrapper = styled('div', {
  alignItems: 'center',
  backgroundColor: '$black',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  paddingTop: '$3'
})

const ImageContainer = styled('div', {
  bottom: 0,
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, 50%)'
})

const Hero = () => {
  const { scroll } = useLocomotiveScroll()

  const scrollTo = useCallback(() => {
    scroll?.scrollTo('#about-section', {
      offset: '-100',
      duration: DURATION * 1000,
      easing: [0.4, 0.0, 0.55, 0.55]
    })
  }, [scroll])

  return (
    <Section css={{ zIndex: 10 }}>
      <Wrapper>
        <Title>
          <Outlined
            data-scroll
            data-scroll-speed={-0.6}
            className="hero__title"
          >
            Basement
          </Outlined>
          <br />
          <div data-scroll data-scroll-speed={0.4}>
            <em className="hero__subtitle">Grotesque</em>
          </div>
        </Title>
        <Subtitle
          className="hero__link"
          data-scroll
          data-scroll-speed={0.3}
          icon={<ArrowDown />}
          onClick={scrollTo}
          variant="underlined"
        >
          KNOW MORE ABOUT IT DOWNSTAIRS
        </Subtitle>
      </Wrapper>
      <ImageContainer>
        <Image
          alt="Stitch"
          className="hero__image"
          data-scroll
          data-scroll-speed={0.3}
          height={100}
          objectFit="cover"
          priority
          quality={100}
          src={label}
          width={266}
        />
      </ImageContainer>
    </Section>
  )
}

export default Hero
