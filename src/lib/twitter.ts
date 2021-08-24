import { getHrefWithQuery } from './utils/router'

const TWITTER_HASHTAG = '#basementgrotesque'
const TWEETS_PER_PAGE = 10

export type User = {
  id: string
  username: string
  name: string
  profile_image_url: string
}

export type Tweet = {
  created_at: string
  text: string
  id: string
  author_id: string
  user?: User
}

export type TwitterRes = {
  data: Tweet[]
  includes: {
    users: User[]
  }
  meta: {
    newest_id: string
    oldest_id: string
    result_count: number
    next_token?: string
  }
}

export const getHashtagTweets = async (nextPageToken?: string) => {
  const pathAndQuery = getHrefWithQuery('/2/tweets/search/recent', {
    query: TWITTER_HASHTAG,
    max_results: TWEETS_PER_PAGE.toString(),
    'tweet.fields': 'author_id,created_at,id',
    'user.fields': 'name,username,profile_image_url',
    expansions: 'author_id',
    next_token: nextPageToken ?? null
  })
  const url = 'https://api.twitter.com' + pathAndQuery

  const res = (await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
    }
  }).then((res) => res.json())) as TwitterRes

  const usersMap: Record<string, User> = {}

  res.includes.users.forEach((user: User) => {
    usersMap[user.id] = user
  })

  res.data = res.data.map((tweet) => ({
    ...tweet,
    user: usersMap[tweet.author_id]
  }))

  return res
}
