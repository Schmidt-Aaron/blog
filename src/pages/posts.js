// blog post list page
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import usePosts from "../hooks/use-Posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

const Posts = () => {
  //TODO fix static query to ge post data
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMdx {
  //       nodes {
  //         frontmatter {
  //           title
  //           slug
  //           alt
  //           date
  //           status
  //           image {
  //             sharp: childImageSharp {
  //               fluid(quality: 80, maxWidth: 100, maxHeight: 100) {
  //                 ...GatsbyImageSharpFluid_withWebp
  //               }
  //             }
  //           }
  //         }
  //         excerpt
  //       }
  //     }
  //   }
  // `)

  // return data.allMdx.nodes.map(post => ({
  //   title: post.frontmatter.title,
  //   slug: post.frontmatter.slug,
  //   image: post.frontmatter.image,
  //   alt: post.frontmatter.alt,
  //   excerpt: post.excerpt,
  // }))

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {/* {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))} */}
    </Layout>
  )
}

export default Posts
