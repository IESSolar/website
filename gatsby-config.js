require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { spaceId, accessToken, environment } = process.env;

module.exports = {
  siteMetadata: {
    title: `IES`,
    description: `Organisational website`,
    author: `@marcochalub`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
        environment,
        host:`cdn.contentful.com`,
        downloadLocal: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marco Santos Chalub`,
        short_name: `Marco Santos Chalub`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png` // This path is relative to the root of the site.
      }
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
};
