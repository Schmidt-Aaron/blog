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
import "./post.css"

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
    <article
      css={css`
        max-width: 600px;
        margin: auto;
      `}
    >
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted on <time>{post.frontmatter.date}</time>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/posts">&larr; back to all posts</ReadLink>
    </article>
  </Layout>
)

export default PostTemplate
