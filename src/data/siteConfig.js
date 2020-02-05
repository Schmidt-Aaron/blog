const path = require("path")

module.exports = {
  title: `Aaron Schmidt's Website`,
  titleShort: `Aaron Schmidt`,
  description: `Aaron Schmidt is a full stack web developer specializing in modern JavaScript.`,
  url: `https://aaronms.com`,
  siteUrl: `https://aaronms.com`,
  siteRepo: `https://github.com/Schmidt-Aaron/blog`,
  author: `Aaron Schmidt`,
  googleAnalyticsID: `UA-149297217-1`,
  themeColor: `#3e94ec`, // dark blue
  backgroundColor: `#fff`, // white
  pathPrefix: null,
  logo: path.resolve(__dirname, "../images/android-chrome-512x512.png"),
  social: {
    twitter: `https://twitter.com/Aaronmss`,
    email: `hello@aaronms.com`,
    linkedIn: `https://www.linkedin.com/in/aaronmss/`,
    github: `https://github.com/Schmidt-Aaron`,
  },
}
