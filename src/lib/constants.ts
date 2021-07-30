export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof window !== 'undefined'
export const isServer = !isClient

// Be sure to include Vercel System Env Vars
export const originURL = isDev
  ? 'http://localhost:3000'
  : `https://${
      process.env.VERCEL_URL ??
      process.env.NEXT_PUBLIC_VERCEL_URL ??
      'fallback-domain.com'
    }`
