import Image from 'next/image'

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
  color: '$black',
  display: 'inline-block',
  letterSpacing: '-1px',
  marginTop: '5.736vw',
  textShadow:
    '1.5px 0 0 $white, -1.5px 0 0 $white, 0 1.5px 0 $white, 0 -1.5px 0 $white, 1.5px 1.5px $white, -1.5px -1.5px 0 $white, 1.5px -1.5px 0 $white, -1.5px 1.5px 0 $white',

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
  backgroundImage: 'url(/images/bghero.jpg)',
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

const Hero = () => (
  <section>
    <Wrapper>
      <Title>
        <Outlined>Basement</Outlined> <br /> <em>Grotesque</em>
      </Title>
      <Subtitle>
        KNOW MORE ABOUT IT downstairs
        <IconArrow />
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

export default Hero
