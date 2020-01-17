/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }
  // create blog post pages
  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    if (post.frontmatter.slug) {
      actions.createPage({
        path: post.frontmatter.slug,
        component: require.resolve("./src/templates/post.js"), // layout
        context: {
          slug: post.frontmatter.slug,
        },
      })
    }
  })
}
