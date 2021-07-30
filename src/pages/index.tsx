import { styled } from '../../stitches.config'
import PageLayout from 'components/layout/page'

const Button = styled('button', {})

const HomePage = () => {
  return (
    <PageLayout headProps={{ title: 'next-typescript | basement.studio' }}>
      <Button
        css={{
          backgroundColor: '$green'
        }}
      >
        Hola mundo.
      </Button>
    </PageLayout>
  )
}

export default HomePage
