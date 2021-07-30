import { FullUser, Status } from 'twitter-d'

const TWITTER_HASHTAG = '#superbowl'
const TWEETS_PER_PAGE = 15

export type Tweet = Status & {
  user: FullUser
  text: string
}

type TwitterRes = {
  statuses: Tweet[]
  search_metadata: {
    completed_in: number
    max_id: number
    max_id_str: string
    next_results: string
    query: string
    count: number
    since_id: number
    since_id_str: string
  }
}

export const getHashtagTweets = async () => {
  const res = (await fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(
      TWITTER_HASHTAG
    )}&count=${TWEETS_PER_PAGE}&result_type=recent`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
    }
  ).then((res) => res.json())) as TwitterRes

  return res
}
