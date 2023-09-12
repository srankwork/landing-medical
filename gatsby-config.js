/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/services/botox',
  siteMetadata: {
    title: `Botox`,
    siteUrl: `https://novacutisclinics.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['GTM-WQ2KSTQ5'],
      },
      pluginConfig: {
        head: true,
      },
    },
  ],
};
