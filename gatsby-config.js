/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "The SurfSkate Academy",
    description: "On land surf training for all levels of surfers in Scotland",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dyzimbfa2131`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `Gen2DpMkOxo4-5EIWeBNGj1Kv58afhSzW5abf1DLINs`,
      },
    },
  ],
}
