/**
 *
 * hook to pull in latest X posts
 *
 */
import { graphql, useStaticQuery } from "gatsby"

// get all the data we want
const latestPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY")
            status
            tags
          }
          excerpt(pruneLength: 140)
          fileAbsolutePath
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  `)

  // return it
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    tags: post.frontmatter.tags,
    timeToRead: post.fields.readingTime.text,
    path: post.fileAbsolutePath,
    status: post.frontmatter.status,
    date: post.frontmatter.date,
  }))
}

export default latestPosts
