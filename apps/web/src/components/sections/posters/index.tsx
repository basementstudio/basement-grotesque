import Section from 'components/layout/section'
import Image from 'next/image'
import Box from 'components/common/box'
import Text from 'components/common/text'
import AspectBox from 'components/common/aspect-box'

import subwayPoster from '../../../../public/images/posters/subway.png'
import streetPoster from '../../../../public/images/posters/street.png'
import streetMobilePoster from '../../../../public/images/posters/street-mobile.png'
import theOdysseyPoster from '../../../../public/images/posters/the-odyssey.png'
import marDelPlataPoster from '../../../../public/images/posters/mar-del-plata.png'
import arrowDown from '../../../../public/images/posters/arrow-down.png'
import { styled } from '../../../../stitches.config'

export const toVw = (px: number, base = 1440) => `${(px * 100) / base}vw`
type ResponsiveValue<T extends any = number> = [T, T]

const PostersSection = () => {
  return (
    <Section
      background="black"
      css={{
        height: toVw(1705, 375),
        '@bp2': { height: toVw(2497) }
      }}
    >
      {/* This is delicate, be careful! */}
      <Poster
        src={subwayPoster}
        alt="subway poster"
        width={[375, 1440]}
        height={[204, 784]}
        left={[0, 0]}
        top={[0, 0]}
      />

      <Poster
        src={[streetMobilePoster, streetPoster]}
        alt="street poster"
        width={[172, 664]}
        height={[268, 675]}
        left={[0, 40]}
        top={[80, 309]}
        data-scroll-speed={-0.6}
        data-scroll
      />

      <Video
        src="/KTYPE B- 1.mp4"
        width={[375, 527]}
        height={[233, 527]}
        left={[0, 40]}
        top={[1163, 1125]}
        videoLeft={[71, 0]}
        data-scroll-speed={-0.6}
        data-scroll
      />

      <Poster
        src={marDelPlataPoster}
        alt="mar del plata poster"
        width={[259, 507]}
        height={[462, 902]}
        left={[116, 732]}
        top={[526, 1125]}
      />

      <Poster
        src={theOdysseyPoster}
        alt="the odyssey poster"
        width={[259, 437]}
        height={[151, 255]}
        left={[116, 963]}
        top={[1472, 2128]}
        data-scroll-speed={-0.6}
        data-scroll
      />

      <Poster
        src={arrowDown}
        alt="arrow down"
        width={[14, 25]}
        height={[14, 25]}
        left={[28, 40]}
        top={[1021, 1809]}
        data-scroll-speed={-0.6}
        data-scroll
      />

      <TextPiece
        size={[18, 24]}
        left={[28, 732]}
        top={[398, 829]}
        lineHeight={1.15}
        uppercase
      >
        Forget morality
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[116, 847]}
        top={[432, 829]}
        textIndent={[0, 172]}
        maxWidth={[231, 550]}
      >
        Moral philosophy is bogus, a mere substitute for God that licenses ugly
        emotions.
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[196, 1078]}
        top={[312, 956]}
        fontFeatureSettings="'ss01' on"
      >
        I001.s5
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[196, 732]}
        top={[328, 956]}
        fontFeatureSettings="'ss01' on"
      >
        I002.s5
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[28, 362]}
        top={[526, 2003]}
        fontFeatureSettings="'ss01' on"
      >
        I003.s5
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[96, 40]}
        top={[1392, 1695]}
        fontFeatureSettings="'ss01' on"
        data-scroll-speed={-0.6}
        data-scroll
      >
        I004.s5
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[116, 732]}
        top={[1644, 2355]}
        fontFeatureSettings="'ss01' on"
      >
        I005.s5
      </TextPiece>
      <TextPiece
        size={[14, 24]}
        left={[116, 358]}
        top={[1021, 1804]}
        maxWidth={[231, 322]}
        data-scroll-speed={0.6}
        data-scroll
      >
        In every Mithraeum the centerpiece was a representation of Mithras
        killing a sacred bull, an act called the Tauroctony.
      </TextPiece>
      <TextPiece size={[14, 24]} left={[28, 40]} top={[1644, 2355]}>
        2K21
      </TextPiece>
    </Section>
  )
}

const Poster = ({
  src,
  alt,
  width,
  height,
  left,
  top,
  ...rest
}: {
  src: StaticImageData | ResponsiveValue<StaticImageData>
  alt: string
  width: ResponsiveValue
  height: ResponsiveValue
  left: ResponsiveValue
  top: ResponsiveValue
}) => {
  return (
    <Box
      css={{
        position: 'absolute',
        width: toVw(width[0], 375),
        left: toVw(left[0], 375),
        top: toVw(top[0], 375),
        '@bp2': {
          width: toVw(width[1]),
          left: toVw(left[1]),
          top: toVw(top[1])
        }
      }}
      {...rest}
    >
      <Box css={{ '@bp2': { display: 'none' } }}>
        <AspectBox ratio={width[0] / height[0]}>
          <Image
            src={Array.isArray(src) ? src[0] : src}
            alt={alt}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </AspectBox>
      </Box>
      <Box css={{ display: 'none', '@bp2': { display: 'block' } }}>
        <AspectBox ratio={width[1] / height[1]}>
          <Image
            src={Array.isArray(src) ? src[1] : src}
            alt={alt}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </AspectBox>
      </Box>
    </Box>
  )
}

const TextPiece = ({
  children,
  left,
  top,
  size,
  textIndent,
  maxWidth,
  uppercase,
  fontFeatureSettings,
  lineHeight = 1.15,
  ...rest
}: {
  children?: React.ReactNode
  left: ResponsiveValue
  top: ResponsiveValue
  size: ResponsiveValue
  maxWidth?: ResponsiveValue
  textIndent?: ResponsiveValue
  lineHeight?: string | number
  uppercase?: boolean
  fontFeatureSettings?: string
}) => {
  return (
    <Text
      css={{
        fontFeatureSettings,
        lineHeight,
        position: 'absolute',
        fontSize: toVw(size[0], 375),
        left: toVw(left[0], 375),
        top: toVw(top[0], 375),
        textIndent: textIndent ? toVw(textIndent[0], 375) : undefined,
        maxWidth: maxWidth ? toVw(maxWidth[0], 375) : undefined,
        '@bp2': {
          fontSize: toVw(size[1]),
          left: toVw(left[1]),
          top: toVw(top[1]),
          textIndent: textIndent ? toVw(textIndent[1]) : undefined,
          maxWidth: maxWidth ? toVw(maxWidth[1]) : undefined
        }
      }}
      uppercase={uppercase}
      {...rest}
      heading
    >
      {children}
    </Text>
  )
}

const VideoAspectBox = styled(AspectBox, {
  display: 'flex',
  background: 'black'
})

const Video = ({
  src,
  width,
  height,
  left,
  top,
  videoLeft,
  ...rest
}: {
  src: string | ResponsiveValue<string>
  width: ResponsiveValue
  height: ResponsiveValue
  left: ResponsiveValue
  top: ResponsiveValue
  videoLeft: ResponsiveValue
}) => {
  return (
    <Box
      css={{
        position: 'absolute',
        width: toVw(width[0], 375),
        left: toVw(left[0], 375),
        top: toVw(top[0], 375),
        '@bp2': {
          width: toVw(width[1]),
          left: toVw(left[1]),
          top: toVw(top[1])
        }
      }}
      {...rest}
    >
      <Box css={{ '@bp2': { display: 'none' } }}>
        <VideoAspectBox ratio={width[0] / height[0]}>
          <Box
            as="video"
            css={{ height: '100%', marginLeft: toVw(videoLeft[0], 375) }}
            src={Array.isArray(src) ? src[0] : src}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          />
        </VideoAspectBox>
      </Box>
      <Box css={{ display: 'none', '@bp2': { display: 'block' } }}>
        <VideoAspectBox ratio={width[1] / height[1]}>
          <Box
            as="video"
            css={{ height: '100%', marginLeft: toVw(videoLeft[1]) }}
            src={Array.isArray(src) ? src[1] : src}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          />
        </VideoAspectBox>
      </Box>
    </Box>
  )
}

export default PostersSection
