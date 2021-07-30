const TWITTER_HASHTAG = '#basementgrotesque'

export const getHashtagTweets = async () => {
  const res = await fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(
      TWITTER_HASHTAG
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
    }
  ).then((res) => res.json())

  return res
}
