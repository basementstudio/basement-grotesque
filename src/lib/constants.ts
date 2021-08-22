export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof window !== 'undefined'
export const isServer = !isClient

export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (isDev ? 'http://localhost:3000' : 'https://grotesque.basement.studio')
)
export const siteOrigin = siteURL.origin
