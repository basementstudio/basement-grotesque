import Image from 'next/image'

// Stitches
import { styled } from '../../../../stitches.config'

// Images
import background from '../../../../public/images/bghero.jpg'

const BackgroundImage = styled('div', {
  width: '100vw',
  height: '85vh',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: '-1'
})

const Title = styled('h1', {
  color: 'white',
  fontFamily: '$heading',
  fontSize: '120px',
  letterSpacing: '-1px',
  lineHeight: '1',
  overflow: 'hidden',
  textAlign: 'center',
  textTransform: 'uppercase'
})

const Outlined = styled('span', {
  textShadow:
    '1.5px 0 0 white, -1.5px 0 0 white, 0 1.5px 0 white, 0 -1.5px 0 white, 1.5px 1.5px white, -1.5px -1.5px 0 white, 1.5px -1.5px 0 white, -1.5px 1.5px 0 white',
  color: '$black',
  fontSize: '131px'
})

const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: '85vh',
  justifyContent: 'center',
  paddingTop: '$3'
})

const Hero = () => (
  <section>
    <BackgroundImage>
      <Image
        alt="Basement"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        src={background}
      />
    </BackgroundImage>
    <Wrapper>
      <Title>
        <Outlined>Basement</Outlined> <br /> Grotesque
      </Title>
    </Wrapper>
  </section>
)

export default Hero
