module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fimento',
        short_name: 'Fimento',
        start_url: '/',
        background_color: '#dbc9be',
        theme_color: '#dbc9be',
        display: 'fullscreen',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PN5CGF8',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        dataLayerName: 'dataLayer',
        routeChangeEventName: 'nuxtRoute',
      },
    },
  ],
};
