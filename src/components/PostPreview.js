/**
 *
 * blog post preview component used on posts page
 *
 */

/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import ReadLink from "./ReadLink"
import { Link } from "gatsby"
import Image from "gatsby-image"
import DefaultPreviewImage from "./PreviewImage"
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        display: flex;
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 0 1rem 0 0;
          width: 150px;
        `}
      >
        {// serve default image if no image declared in post frontmatter
        !post.image ? (
          <DefaultPreviewImage />
        ) : (
          <Image
            fluid={post.image.sharp.fluid}
            css={css`
              width: 150px;
              * {
                margin-top: 0;
              }
            `}
            alt={post.alt}
          />
        )}
      </Link>
      <div>
        <h3>
          <Link
            to={post.slug}
            css={css`
              color: rgba(0, 100, 202, 1);
              font-size: 2rem;
              font-weight: 400;
            `}
          >
            {post.title}
          </Link>
        </h3>
        <p>{post.excerpt}</p>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <span>
            <FaRegCalendarAlt /> {post.date}
          </span>
          <span>
            <FaRegClock /> {post.timeToRead} mins
          </span>
          <ReadLink to={post.slug}>read &rarr; </ReadLink>
        </div>
      </div>
    </article>
  )
}

export default PostPreview
