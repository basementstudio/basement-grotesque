import { styled } from '../../stitches.config'
import PageLayout from 'components/layout/page'

const Button = styled('button', {})

const HomePage = () => {
  return (
    <PageLayout>
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
