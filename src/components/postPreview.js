/**
 *
 * blog post preview component used on posts page
 *
 */

import React from "react"
import { css } from "@emotion/core"
import ReadLink from "./readLink"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { previewImage as DefaultImg } from "./defaultImage"

const PostPreview = ({ post }) => (
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
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      {// serve default image if no image declared in post frontmatter
      !post.image ? (
        <DefaultImg />
      ) : (
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            width: 100px;
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
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr; </ReadLink>
    </div>
  </article>
)

export default PostPreview
