const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { accessToken, repositoryName, schemas } = require('./prismic-config')
const linkResolver = require('./src/data/resolvers/link')

const prismicPlugin = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName,
    accessToken,
    linkResolver: () => doc => linkResolver(doc),
    schemas,
    lang: '*',
  },
}

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layouts/Main/index.ts'),
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, '.'),
          '@src': path.resolve(__dirname, 'src'),
          '@cmp': path.resolve(__dirname, 'src/components'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
        extensions: ['ts', 'tsx', 'js'],
      },
    },
    prismicPlugin,
  ],
}
