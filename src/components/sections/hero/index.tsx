import Image from 'next/image'

// Styles
import { styled } from '../../../../stitches.config'

// Images
import label from '../../../../public/images/labelhero.png'

const Title = styled('h1', {
  color: '$white',
  fontFamily: '$heading',
  fontSize: 'max(60px, 8.333vw)',
  letterSpacing: '-1px',
  lineHeight: '1',
  overflow: 'hidden',
  textAlign: 'center',
  textTransform: 'uppercase'
})

const Outlined = styled('span', {
  textShadow:
    '1.5px 0 0 $white, -1.5px 0 0 $white, 0 1.5px 0 $white, 0 -1.5px 0 $white, 1.5px 1.5px $white, -1.5px -1.5px 0 $white, 1.5px -1.5px 0 $white, -1.5px 1.5px 0 $white',
  color: '$black',
  fontSize: 'max($10, 9.097vw)'
})

const Wrapper = styled('div', {
  alignItems: 'center',
  backgroundColor: '$black',
  backgroundImage: 'url(/images/bghero.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
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
  <section data-scroll-section>
    <Wrapper>
      <Title>
        <Outlined>Basement</Outlined> <br /> Grotesque
      </Title>
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
