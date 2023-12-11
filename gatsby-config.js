/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/landing/',
  siteMetadata: {
    title: `Rangeet`,
    siteUrl: `https://rangeet.com/`,
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
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1195675271822794',
      },
    },
  ],
};
