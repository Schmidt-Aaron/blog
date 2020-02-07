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
import Layout from "../components/Layout"
import ReadLink from "../components/ReadLink"
import "./post.css"
import PropTypes from "prop-types"
import TitleWithGradient from "../components/TitleWithGradient"
import SEO from "../components/Seo"
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"
import PostDetails from "../components/PostDetails"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
      body
      fileAbsolutePath
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  const { title, date } = post.frontmatter
  const timeToRead = post.fields.readingTime.text

  // get path to source code for post
  const gitHubURL = `https://github.com/Schmidt-Aaron/blog/blob/master/`
  // const regex = /^.*blog\/ / works on localhost
  const regex =
    process.env.NODE_ENV === "development" ? /^.*blog\// : /^.*repo\//
  const modifiedPath = post.fileAbsolutePath.replace(regex, "")
  const newPath = gitHubURL + modifiedPath

  return (
    <Layout>
      <SEO title={title} />
      <article
        css={css`
          max-width: 600px;
          margin: auto;
        `}
      >
        <TitleWithGradient
          css={css`
            font-size: 3rem;
            line-height: 4rem;
          `}
        >
          {title}
        </TitleWithGradient>
        <PostDetails date={date} timeToRead={timeToRead} />
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
