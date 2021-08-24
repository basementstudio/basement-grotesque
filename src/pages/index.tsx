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
      <DataColumns tweets={tweets} releases={releases} />
    </PageLayout>
  )
}

const releases = [
  {
    version: '1.2',
    date: new Date('08-18-2021'),
    text: 'Refined shapes for certain glyphs. Adjusted kerning and addition of more variants and ligatures.'
  },
  {
    version: '1.1',
    date: new Date('07-08-2021'),
    text: 'Refined and redrawn shapes. Masters set up for additional weights and widths. Renaming from Bold to Black to comply with the new weight spectrum.'
  },
  {
    version: '1.0',
    date: new Date('04-28-2021'),
    text: 'Private release. Bold weight, full set of glyphs with support for most Latin languages, full set of punctuation and symbols.'
  },
  {
    version: '0.9',
    date: new Date('04-24-2021'),
    text: 'Capital letters, alternative glyphs, stylistic sets, regular and discretionary ligatures, lining and old-style figures.'
  },
  {
    version: '0.5',
    date: new Date('03-17-2021'),
    text: 'Lowercase and some capital letters.'
  }
]

export const getStaticProps = async () => {
  const tweets = await getHashtagTweets()

  return {
    props: {
      tweets
    },
    revalidate: 1
  }
}

export default HomePage
