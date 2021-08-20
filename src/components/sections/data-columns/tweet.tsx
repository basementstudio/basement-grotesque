import { styled } from '../../../../stitches.config'
import { Tweet as TweetType } from 'lib/twitter'
import Image from 'next/image'
import { monthLabels } from 'lib/utils/date'

type TweetProps = {
  tweet: TweetType
}

const Container = styled('div', {
  '&:first-child': {
    '@bp2': {
      marginTop: 50
    }
  },

  '&:not(:last-child)': {
    paddingBottom: 50
  }
})

const UserData = styled('div', {
  display: 'flex',

  '.tweetImage': {
    borderRadius: '50%',
    filter: 'grayscale(100%)'
  }
})

const Box = styled('div', {})

const Text = styled('p', {
  lineHeight: 1,
  color: '$white',

  variants: {
    size: {
      sm: {
        fontSize: '$3'
      },
      md: {
        fontSize: '$6',
        letterSpacing: -1
      },
      lg: {
        fontSize: '$9'
      },
      xl: {
        fontSize: '$14',
        lineHeight: 1
      },
      icon: {
        fontSize: '$7'
      }
    },
    type: {
      heading: {
        fontFamily: '$heading'
      },
      body: {
        fontFamily: '$body'
      }
    }
  }
})

const Tweet = ({ tweet }: TweetProps) => {
  const date = new Date(tweet.created_at)

  return (
    <Container>
      <UserData>
        <Image
          width="72"
          height="72"
          src={tweet.user.profile_image_url_https}
          className="tweetImage"
        />
        <Box css={{ flex: 1, marginLeft: '$space$3' }}>
          <Text size="md" type="heading">
            {tweet.user.name}
          </Text>
          <Text
            size="sm"
            type="heading"
            css={{ opacity: '50%', marginTop: '$space$2' }}
          >
            @{tweet.user.screen_name}
          </Text>
        </Box>
      </UserData>
      <Text size="md" type="body" css={{ marginTop: '$space$3' }}>
        {tweet.text}
      </Text>
      <Text
        size="sm"
        type="body"
        css={{ marginTop: '$space$3', opacity: '50%' }}
      >
        {date.getHours()}:{date.getMinutes()}{' '}
        {date.getHours() >= 12 ? 'PM' : 'AM'}
        {' - '}
        {date.getDate()} {monthLabels[date.getMonth()]} {date.getFullYear()}
      </Text>
    </Container>
  )
}

export default Tweet
