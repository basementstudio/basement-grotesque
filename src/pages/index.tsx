// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/hero'
import AboutSection from 'components/sections/about'

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
    </PageLayout>
  )
}

export default HomePage
