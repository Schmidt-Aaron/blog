/**
 *
 * Individual blog post template from MDX
 *
 */

import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/readLink"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <article>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        By Aaron posted on <time>{post.frontmatter.date}</time>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/posts">&larr; back to all posts</ReadLink>
    </article>
  </Layout>
)

export default PostTemplate
