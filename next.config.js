const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withTM = require('next-transpile-modules')
const withSvgr = require('next-svgr')

module.exports = withPlugins(
  [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
    withTM(['gsap']),
    withSvgr({
      removeViewbox: false
    })
  ],
  {
    webpack5: true,
    reactStrictMode: true,
    images: {
      domains: ['pbs.twimg.com', 'abs.twimg.com']
    },
    async rewrites() {
      return [
        {
          source: '/bee.js',
          destination: 'https://cdn.splitbee.io/sb.js'
        },
        {
          source: '/_hive/:slug',
          destination: 'https://hive.splitbee.io/:slug'
        }
      ]
    }
  }
)
