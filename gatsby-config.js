module.exports = {
  siteMetadata: {
    title: `Polished Beauty Salon`,
    description: `Static website for Polished Beauty Salon owned by Alina. Showcases her services, gallery of work, and hours of operation.`,
    author: `@SasheemDev`,
    facebookUrl: `https://www.facebook.com/Polished-Beauty-Salon-590057777678058/photos/?ref=page_internal`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          `roboto\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "polished-beauty-salon-static-website",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
}
