// enable process.env variables
// commented out b/c breaks build
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// import configuration data
const siteConfig = require("./src/data/siteConfig")

// destructure config data
const {
  googleAnalyticsID,
  title,
  description,
  titleShort,
  themeColor,
  backgroundColor,
  logo,
} = siteConfig

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        siteSpeedSampleRate: 10,
        cookieDomain: "auto",
      },
    },
    // SEO- adds content to the header
    `gatsby-plugin-react-helmet`,
    // css plugin
    `gatsby-plugin-emotion`,
    // markdown plugin for sharp
    `gatsby-transformer-sharp`,
    // image optimization plugin
    `gatsby-plugin-sharp`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/?=sitemap
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: titleShort,
        start_url: `/`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: `src/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // generates a bundle size graph with the "analyze command"
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static",
      },
    },
    // allows the use of SVG imports
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      // allows the use of MDX files
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
        extensions: [".mdx", ".md", ".markdown"],
        // enables gatsby sharp for images linked in mdx files
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-prismjs`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: { "/sw.js": ["Cache-Control: no-cache"] },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: themeColor,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
