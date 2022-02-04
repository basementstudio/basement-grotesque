import PageLayout from 'components/layout/page'
import { NFTHero } from 'components/sections/nft/hero'

const NFTPage = () => {
  return (
    <PageLayout header={false} footer={false}>
      <NFTHero />
    </PageLayout>
  )
}

export default NFTPage
