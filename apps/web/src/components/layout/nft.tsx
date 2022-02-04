import Box from 'components/common/box'
import Head, { HeadProps } from 'components/common/head'
import { NFTMarquee } from 'components/sections/nft/marquee'
import { toVw } from 'components/sections/posters'
import { range } from 'lib/utils'
import Footer from './footer'

type Props = {
  children?: React.ReactNode
  headProps?: HeadProps
}

export const NFTLayout = ({ headProps, children }: Props) => {
  return (
    <Box
      css={{
        $$frameBorderX: toVw(16, 1920),
        $$frameBorderY: toVw(42, 1920),
        $$frameBorderRadius: '32px',

        pb: '$$frameBorderY'
      }}
    >
      <Head {...headProps} />

      <Box
        css={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          zIndex: 99,
          pointerEvents: 'none',
          flexDirection: 'column',

          $$marqueeHeight: '$$frameBorderY'
        }}
        aria-hidden
      >
        <NFTMarquee />
        <Box
          css={{
            border: `1px solid $white`,
            borderRadius: '$$frameBorderRadius',
            height: '100%',
            width: `calc(100% - 2 * $$frameBorderX)`,
            mx: '$$frameBorderX'
          }}
        />
        <NFTMarquee>
          {range(0, 20).map(
            () => `${new Date().getFullYear()} BASEMENT GROTESQUE NFT / `
          )}
        </NFTMarquee>
      </Box>

      <Box
        css={{
          $$fullFrameHeight: 'calc(100vh - $$frameBorderY * 2)',
          margin: `$$frameBorderY $$frameBorderX`,
          borderRadius: '$$frameBorderRadius',
          overflow: 'hidden',
          minHeight: `$$fullFrameHeight`
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
