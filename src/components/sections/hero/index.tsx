import Image from 'next/image'

// Stitches
import { styled } from '../../../../stitches.config'

// Images
import background from '../../../../public/images/bghero.jpg'

const BackgroundImage = styled('div', {
  width: '100vw',
  height: '90vh',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: '-1'
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
  </section>
)

export default Hero
