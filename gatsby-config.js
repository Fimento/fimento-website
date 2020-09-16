/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
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
  ],
};
