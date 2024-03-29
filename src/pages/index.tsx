import { InferGetStaticPropsType } from 'next'

// Layout
import PageLayout from 'components/layout/page'
import { getHashtagTweets, TwitterRes } from 'lib/twitter'

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
      <DataColumns tweets={tweets} releases={releases} />
    </PageLayout>
  )
}

const releases = [
  {
    version: '1.2',
    date: new Date(2021, 8, 24),
    text: 'Refined shapes for certain glyphs. Adjusted kerning and addition of more variants and ligatures.'
  },
  {
    version: '1.1',
    date: new Date(2021, 7, 8),
    text: 'Refined and redrawn shapes. Masters set up for additional weights and widths. Renaming from Bold to Black to comply with the new weight spectrum.'
  },
  {
    version: '1.0',
    date: new Date(2021, 4, 28),
    text: 'Private release. Bold weight, full set of glyphs with support for most Latin languages, full set of punctuation and symbols.'
  },
  {
    version: '0.9',
    date: new Date(2021, 4, 24),
    text: 'Capital letters, alternative glyphs, stylistic sets, regular and discretionary ligatures, lining and old-style figures.'
  },
  {
    version: '0.5',
    date: new Date(2021, 3, 17),
    text: 'Lowercase and some capital letters.'
  }
]

export const getStaticProps = async () => {
  let tweets: TwitterRes | null
  try {
    tweets = await getHashtagTweets()
  } catch (error) {
    console.warn(error.message)
    tweets = null
  }

  return {
    props: {
      tweets
    },
    revalidate: 1
  }
}

export default HomePage
