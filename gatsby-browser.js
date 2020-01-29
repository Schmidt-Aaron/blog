/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// enable prismjs themes
require("prismjs/themes/prism.css")
// require("prismjs/themes/prism-coy.css")
// require("prismjs/themes/prism-dark.css")
// require("prismjs/themes/prism-funky.css")
// require("prismjs/themes/prism-okaidia.css")
// require("prismjs/themes/prism-solarizedlight.css")
// require("prismjs/themes/prism-tomorrow.css")
// require("prismjs/themes/prism-twilight.css")

// Displaying a message when a service worker updates
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

// require fonts
require("typeface-hind-madurai")
require("typeface-lora")
require("typeface-montserrat")
