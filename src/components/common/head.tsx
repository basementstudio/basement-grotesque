import { NextSeo, NextSeoProps } from 'next-seo'
import { originURL } from 'lib/constants'
import { useRouter } from 'next/dist/client/router'
import { useMemo } from 'react'
import NextHead from 'next/head'
import { useMedia } from 'hooks/use-media'

const defaultMeta = {
  title: 'next-typescript | basement.studio',
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  ogImage: `${originURL}/og.png`
}

type Meta = {
  title: string
  description?: string
  ogImage?: string
  noIndex?: boolean
}

export type HeadProps = Meta & { rawNextSeoProps?: NextSeoProps }

const Head = (props: HeadProps) => {
  const router = useRouter()
  const isDark = useMedia('(prefers-color-scheme: dark)')

  const nextSeoProps: NextSeoProps = useMemo(() => {
    return {
      ...props.rawNextSeoProps,
      title: props.title ?? defaultMeta.title,
      description: props.description ?? defaultMeta.description,
      canonical: `${originURL}${router.pathname}`,
      openGraph: {
        images: [{ url: props.ogImage ?? defaultMeta.ogImage }]
      },
      noindex: props.noIndex
    }
  }, [props, router.pathname])

  return (
    <>
      <NextSeo {...nextSeoProps} />
      <NextHead>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href={isDark ? '/favicon-dark.svg' : '/favicon.svg'} />
        <link rel="mask-icon" href="/favicon.svg" color="#000" />
      </NextHead>
    </>
  )
}

export default Head
