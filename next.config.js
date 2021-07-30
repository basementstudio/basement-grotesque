const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withTM = require('next-transpile-modules')

module.exports = withPlugins(
  [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }), withTM([])],
  { reactStrictMode: true }
)
