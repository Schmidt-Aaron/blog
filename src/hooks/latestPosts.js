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
      allMdx(limit: 5) {
        nodes {
          frontmatter {
            title
            slug
            alt
            date(formatString: "MMM DD, YYYY")
            status
            tags
            image {
              sharp: childImageSharp {
                fluid(quality: 80, maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 160)
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
    image: post.frontmatter.image,
    alt: post.frontmatter.alt,
    excerpt: post.excerpt,
    tags: post.frontmatter.tags,
    timeToRead: post.fields.readingTime.text,
    path: post.fileAbsolutePath,
    status: post.frontmatter.status,
    date: post.frontmatter.date,
  }))
}

export default latestPosts
