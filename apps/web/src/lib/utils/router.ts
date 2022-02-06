import { siteOrigin } from 'lib/constants'

export type QueryParams = { [key: string]: string | null }

export const cleanPath = (asPath: string) => {
  const uri = new URL(asPath, siteOrigin)
  return uri.pathname
}

export const checkIsExternal = (href: string) => {
  try {
    const url = new URL(href)
    const { hostname } = new URL(siteOrigin)
    if (url.hostname !== hostname) return true
  } catch (error) {
    // failed cause href is relative
    return false
  }
}

export const getHrefWithQuery = (
  asPath: string,
  newQueryParams?: QueryParams,
  override = true
) => {
  const uri = new URL(asPath, siteOrigin)

  if (newQueryParams) {
    Object.keys(newQueryParams).forEach((key) => {
      const value = newQueryParams[key]
      if (value === null) {
        if (override) uri.searchParams.delete(key)
        return
      }
      if (uri.searchParams.has(key) && override) {
        uri.searchParams.delete(key)
      }
      uri.searchParams.append(key, value)
    })
  }

  return `${uri.pathname}${uri.search}${uri.hash}`
}
