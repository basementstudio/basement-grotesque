// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/hero'
import AboutSection from 'components/sections/about'
import CharactersSection from 'components/sections/characters'
import DemoSection from 'components/sections/demo'
import RomePreview from 'components/sections/rome-preview'

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
      <CharactersSection />
      <RomePreview />
      <DemoSection />
    </PageLayout>
  )
}

export default HomePage
