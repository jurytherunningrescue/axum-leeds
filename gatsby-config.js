module.exports = {
  siteMetadata: {
    title: `Axum Restaurant Leeds`,
    description: `Website for the Axum restaurant in Leeds`,
    author: `@bjohnnyd`,
    siteUrl: `https://axumleeds.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/injera-table.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        develop: false,
      },
    },
  ],
}
