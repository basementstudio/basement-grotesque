import PageLayout from 'components/layout/page'
import Button from 'components/primitives/button'

const HomePage = () => {
  return (
    <PageLayout headProps={{ title: 'next-typescript | basement.studio' }}>
      <Button>Hola mundo.</Button>
    </PageLayout>
  )
}

export default HomePage
