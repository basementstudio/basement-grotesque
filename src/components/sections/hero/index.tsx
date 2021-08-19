import { useCallback } from 'react'
import Image from 'next/image'

// Primitives
import Button from 'components/primitives/button'

// Styles
import { styled } from '../../../../stitches.config'

// Images
import label from '../../../../public/images/labelhero.png'

// Icons
import IconArrow from 'logos/arrow-hero.svg'

const Title = styled('h1', {
  color: '$white',
  fontFamily: '$heading',
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
    fontStyle: 'normal',
    transform: 'translateY(-35%)'
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
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '0.115vw white',

  '@bp1': {
    letterSpacing: '-0.694vw'
  }
})

const Subtitle = styled('h2', {
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
  backgroundImage: 'url(/images/bgheromobile.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  paddingTop: '$3',

  '@bp1': {
    backgroundImage: 'url(/images/bghero.jpg)'
  }
})

const ImageContainer = styled('div', {
  bottom: 0,
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, 50%)'
})

const StyledIconArrow = styled(IconArrow, {
  width: 'max(20px, 1.389vw)',
  height: 'max(20px, 1.389vw)'
})

const Hero = () => {
  const scrollTo = useCallback(() => {
    document.querySelector('#about-section')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])
  return (
    <section data-scroll-section>
      <Wrapper>
        <Title>
          <Outlined>Basement</Outlined> <br /> <em>Grotesque</em>
        </Title>
        <Subtitle>
          <Button onClick={scrollTo} variant="underlined" hasIcon>
            KNOW MORE ABOUT IT DOWNSTAIRS
            <StyledIconArrow />
          </Button>
        </Subtitle>
      </Wrapper>
      <ImageContainer>
        <Image
          alt="Stitch"
          height={100}
          objectFit="cover"
          priority
          quality={100}
          src={label}
          width={266}
        />
      </ImageContainer>
    </section>
  )
}

export default Hero
