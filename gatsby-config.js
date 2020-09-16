module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
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
