// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/hero'
import AboutSection from 'components/sections/about'
import DemoSection from 'components/sections/demo'
import RomePreview from 'components/sections/rome-preview'

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
      <RomePreview />
      <DemoSection />
    </PageLayout>
  )
}

export default HomePage
