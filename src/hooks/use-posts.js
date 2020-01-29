/**
 *
 * hook to pull in our mdx for our posts page
 *
 */
import { graphql, useStaticQuery } from "gatsby"

// get all the data we want
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            alt
            date(formatString: "DD-MM-YYYY")
            status
            tags
            image {
              sharp: childImageSharp {
                fluid(quality: 80, maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          timeToRead
          fileAbsolutePath
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
    timeToRead: post.timeToRead,
    path: post.fileAbsolutePath,
    status: post.frontmatter.status,
  }))
}

export default usePosts
