/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/services/dermal',
  siteMetadata: {
    title: `Dermal Fillers & Lip Fillers`,
    siteUrl: `https://novacutisclinics.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
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
