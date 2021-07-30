import { styled } from '@stitches/react'
import { Tweet as TweetType } from 'lib/twitter'
import Tweet from './tweet'

const Section = styled('section', {
  background: '$black',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
})

const Column = styled('div', {
  width: '100%',
  padding: '90px 40px',

  '&:not(:first-child)': {
    borderLeft: '1px solid $white'
  }
})

const TweetWrapper = styled('div', {
  '&:not(:last-child)': {
    marginBottom: '44px'
  }
})

const Text = styled('p', {
  fontFamily: '$heading',
  lineHeight: 1,
  color: '$white',

  variants: {
    size: {
      xs: {
        fontSize: 16
      },
      md: {
        fontSize: 24,
        letterSpacing: -1
      },
      lg: {
        fontSize: 40
      },
      xl: {
        fontSize: 120,
        lineHeight: 1
      },
      icon: {
        fontSize: 32
      }
    },
    centered: {
      true: {
        textAlign: 'center'
      }
    }
  }
})

type DataColumnsProps = {
  tweets: TweetType[]
}

const DataColumns = ({ tweets }: DataColumnsProps) => {
  return (
    <Section>
      <Column>
        <Text size="lg">Version History</Text>
      </Column>
      <Column>
        <Text size="lg">Features status</Text>
      </Column>
      <Column>
        <Text size="lg">Tweets</Text>
        <div style={{ marginTop: 42 }}>
          {tweets.map((tweet) => {
            return (
              <TweetWrapper key={tweet.id}>
                <Tweet tweet={tweet} />
              </TweetWrapper>
            )
          })}
        </div>
      </Column>
    </Section>
  )
}

export default DataColumns
