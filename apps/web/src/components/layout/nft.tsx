import Box from 'components/common/box'
import Head, { HeadProps } from 'components/common/head'
import { NFTMarquee } from 'components/sections/nft/marquee'
import { toVw } from 'components/sections/posters'
import { range } from 'lib/utils'
import Footer from './footer'
import * as React from 'react'
import B from 'logos/b.svg'
import Link from 'components/primitives/link'
import { styled } from '../../../stitches.config'
import { R3fContextProvider } from 'lib/r3f/context'
import { R3fCanvas } from 'lib/r3f/canvas'
import { BsmnZipModel } from 'lib/r3f/components/bsmnt-zip-model'
import { R3fGroup } from 'lib/r3f/components/layout/group'

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

      <Header>
        <Link variant="unstyled" href="#">
          <B />
        </Link>
        <Link variant="unstyled" href="#">
          About
        </Link>
        <Link variant="unstyled" href="#">
          The Grotesque
        </Link>
        <Link variant="unstyled" href="#">
          The Team
        </Link>
        <button>Connect Wallet & Claim</button>
      </Header>

      <Box
        id="r3f-canvas"
        css={{
          padding: `$$frameBorderY $$frameBorderX`,
          borderRadius: '$$frameBorderRadius',
          overflow: 'hidden',
          position: 'fixed',
          inset: 0,

          '> div': {
            position: 'relative !important',
            height: '100% !important',
            borderRadius: '$$frameBorderRadius'
          }
        }}
      />

      <R3fContextProvider>
        <R3fCanvas />

        {/* JUST TESTING */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: toVw(300, 1920)
          }}
        >
          <R3fGroup
            style={{
              marginTop: toVw(300, 1920),
              width: toVw(450, 1920),
              height: toVw(450, 1920)
            }}
          >
            <BsmnZipModel />
          </R3fGroup>
        </div>
      </R3fContextProvider>

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

const Header = styled('header', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  left: 0,
  right: 0,
  zIndex: 999,
  top: `calc(${toVw(32, 1920)} + $$frameBorderY)`,
  px: `calc(${toVw(32, 1920)} + $$frameBorderX)`,
  mixBlendMode: 'difference',

  'a, button': {
    fontSize: toVw(18, 1920),
    fontFamily: '$mono',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease-in-out',
    cursor: 'none',

    '&:hover': {
      color: '$orange'
    }
  }
})
