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
import PostersSection from 'components/sections/posters'

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
      <PostersSection />
      <DataColumns
        tweets={tweets}
        releases={[
          {
            version: '1.2',
            date: 'JULY 30, 2021',
            text: 'Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat.'
          },
          {
            version: '1.2',
            date: 'JULY 30, 2021',
            text: 'Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat.'
          },
          {
            version: '1.2',
            date: 'JULY 30, 2021',
            text: 'Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat.'
          }
        ]}
      />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const tweets = await getHashtagTweets()

  return {
    props: {
      tweets: tweets.statuses ?? []
    },
    revalidate: 1
  }
}

export default HomePage
