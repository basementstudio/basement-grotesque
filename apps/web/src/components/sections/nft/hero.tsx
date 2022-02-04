import Section from 'components/layout/section'
import B from 'logos/b.svg'
import Web3Globe from 'logos/web3-globe.svg'
import Link from 'components/primitives/link'
import Box from 'components/common/box'
import { NFTTopMarquee } from 'components/sections/nft/top-marquee'
import { styled } from '../../../../stitches.config'
import { toVw } from '../posters'

export const NFTHero = () => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NFTTopMarquee />
      <Section
        background="black"
        css={{ px: '12px', flexGrow: 1, display: 'flex' }}
      >
        <Box
          css={{
            border: '1px solid $white',
            borderRadius: 32,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Nav>
            <B />
            <Link href="#">About</Link>
            <Link href="#">The Grotesque</Link>
            <Link href="#">The Team</Link>
            <button>Connect Wallet & Claim</button>
          </Nav>
          <Content>
            <p>
              On August 29, 2021, SSUMDAY, CLOSER, ABBEDAGGE, FBI, and HUHI
              brought home a historic championship title to 100 Thieves. To
              commemorate, Nadeshot commissioned a one-of-a-kind diamond chain
              to gift our players & coaches.
            </p>
            <h1>
              basement
              <br />
              grotesque
              <br />
              NFT
            </h1>
          </Content>
          <ActionContainer>
            <Web3Box>
              <div>
                <p>WEB3</p>
                <Web3Globe />
                <p>©{new Date().getFullYear()}</p>
              </div>
              <h3>0.5 ETH</h3>
            </Web3Box>
            <H2>
              MINTED <span>003/500</span>
            </H2>
            <CTA css={{ mt: toVw(32, 1920) }}>CONNECT WALLET & CLAIM</CTA>
          </ActionContainer>
        </Box>
      </Section>
      <NFTTopMarquee />
    </Box>
  )
}

const Nav = styled('nav', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  'a, button': {
    fontSize: toVw(18, 1920),
    fontFamily: '$mono',
    textTransform: 'uppercase'
  }
})

const Content = styled('div', {
  py: toVw(16, 1920),
  flexGrow: 1
})

const ActionContainer = styled('div', {
  pt: toVw(16, 1920),
  borderTop: '1px solid $white',
  position: 'relative'
})

const Web3Box = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: `calc(100% - ${toVw(32, 1920)})`,
  background: '$black',

  '> div': {
    display: 'flex',
    alignItems: 'flex-end'
  },

  h3: {
    fontSize: toVw(47, 1920),
    fontFamily: '$heading',
    textAlign: 'center'
  }
})

const H2 = styled('h2', {
  fontSize: toVw(118.65, 1920),
  fontFamily: '$heading',
  fontWeight: 900,
  lineHeight: 1.1,
  textTransform: 'uppercase',

  span: {
    color: '$orange'
  }
})

const CTA = styled('button', {
  width: '100%',
  borderRadius: '72px',
  border: '1px solid $white',
  height: toVw(98, 1920),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontWeight: 900,
  fontSize: toVw(48, 1920),
  lineHeight: 1.1
})
