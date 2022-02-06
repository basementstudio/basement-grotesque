import { styled } from '../../../../stitches.config'
import { Tweet as TweetType } from 'lib/twitter'
import Image from 'next/image'
import { formatDate } from 'lib/utils/date'
import Box from 'components/common/box'

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
          width="48"
          height="48"
          src={tweet?.user?.profile_image_url as string}
          alt={tweet?.user?.name + ' avatar'}
          layout="fixed"
          className="tweetImage"
          objectFit="cover"
        />
        <Box
          css={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '$space$3'
          }}
        >
          <Text css={{ fontSize: 16, '@bp2': { fontSize: 18 } }} type="heading">
            {tweet?.user?.name ?? ''}
          </Text>
          <Text
            css={{
              fontSize: 14,
              opacity: '50%',
              marginTop: '$space$2',
              fontWeight: 800
            }}
          >
            @{tweet?.user?.username ?? ''}
          </Text>
        </Box>
      </UserData>
      <Text
        type="body"
        css={{
          marginTop: '$space$3',
          fontSize: 16,
          lineHeight: 1.6
        }}
      >
        {tweet.text}
      </Text>
      <Text
        type="body"
        css={{ marginTop: '$space$3', opacity: '50%', fontSize: 14 }}
      >
        {formatDate(date, true)}
      </Text>
    </Container>
  )
}

export default Tweet
