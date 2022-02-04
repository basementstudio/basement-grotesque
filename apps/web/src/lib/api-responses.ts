import { NextApiResponse } from 'next'

// Some helpers for usual http responses

const formatError = (e: unknown) => {
  try {
    if (typeof e === 'string' ? { message: e } : e) {
      switch (typeof e) {
        case 'string':
          return { message: e }
        default:
        case 'object': {
          const anyError = e as any
          return { message: anyError.message, code: anyError.code }
        }
      }
    }
  } catch (error) {
    return { message: 'An unknown error ocurred.' }
  }
}

function success(res: NextApiResponse, json: { [key: string]: any } = {}) {
  return res.status(200).json(json)
}

function badRequest(res: NextApiResponse, error: unknown = 'Bad Request') {
  console.error(error)
  return res.status(400).json({ error: formatError(error) })
}

function notAuthorized(
  res: NextApiResponse,
  error: unknown = 'Not Authorized'
) {
  console.error(error)
  return res.status(401).json({ error: formatError(error) })
}

function notFound(res: NextApiResponse, error: unknown = 'Not Found') {
  console.error(error)
  return res.status(404).json({ error: formatError(error) })
}

function internalServerError(res: NextApiResponse, error: unknown, code = 500) {
  console.error(error)
  return res.status(code).json({ error: formatError(error) })
}

export { success, badRequest, notAuthorized, notFound, internalServerError }
