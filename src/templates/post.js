/**
 *
 * Individual blog post template from MDX
 *
 */
/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/readLink"
import "./post.css"
import moment from "moment"
import PropTypes from "prop-types"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
      fileAbsolutePath
    }
  }
`
// move to helpers?
const PostTemplate = ({ data: { mdx: post } }) => {
  // get path to source code for post
  const gitHubURL = `https://github.com/Schmidt-Aaron/blog/blob/master/`
  const regex = /^.*blog\//
  const modifiedPath = post.fileAbsolutePath.replace(regex, "")
  const newPath = gitHubURL + modifiedPath

  return (
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
          Posted on{" "}
          <time dateTime={post.frontmatter.date}>
            {moment(post.frontmatter.date).format("LL")}
          </time>
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <p>
          Find a mistake? Help me fix it by submitting a{" "}
          <a href={newPath}>pull request</a>.
        </p>
        <ReadLink to="/posts">&larr; back to all posts</ReadLink>
      </article>
    </Layout>
  )
}

export default PostTemplate

PostTemplate.propTypes = {
  data: PropTypes.object,
  mdx: PropTypes.object,
}
