import { badRequest, internalServerError, success } from 'lib/api-responses'
import { getHashtagTweets } from 'lib/twitter'

import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { next_token } = req.query

  try {
    switch (req.method) {
      case 'GET': {
        const twitterRes = await getHashtagTweets(
          next_token as string | undefined
        )
        success(res, twitterRes)
        break
      }
      default:
        badRequest(res, `Request method ${req.method} not supported.`)
        break
    }
  } catch (error) {
    internalServerError(res, error)
  }
}
