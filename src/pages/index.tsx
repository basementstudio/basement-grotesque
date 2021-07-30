import { InferGetStaticPropsType } from 'next'

// Layout
import PageLayout from 'components/layout/page'
import { getHashtagTweets } from 'lib/twitter'

// Sections
import Hero from 'components/sections/hero'
import AboutSection from 'components/sections/about'
import CharactersSection from 'components/sections/characters'
import DemoSection from 'components/sections/demo'
import RomePreview from 'components/sections/rome-preview'
import DataColumns from 'components/sections/data-columns'

const HomePage = ({
  tweets
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
      <CharactersSection />
      <RomePreview />
      <DemoSection />
      <DataColumns tweets={tweets} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const tweets = await getHashtagTweets()

  return {
    props: {
      tweets: tweets.statuses ?? null
    },
    revalidate: 1
  }
}

export default HomePage
