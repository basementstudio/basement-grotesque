import { styled } from '@stitches/react'
import { Tweet as TweetType } from 'lib/twitter'
import Image from 'next/image'

type TweetProps = {
  tweet: TweetType
}

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
  return (
    <div>
      <UserData>
        <Image
          width="72"
          height="72"
          src={tweet.user.profile_image_url_https}
          className="tweetImage"
        />
        <Box css={{ marginLeft: '$space$3' }}>
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
        {new Date(tweet.created_at).toString()}
      </Text>
    </div>
  )
}

export default Tweet
