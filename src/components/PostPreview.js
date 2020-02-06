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
import PropTypes from "prop-types"
import { COLORS, BREAKPOINTS } from "../templates/theme"
import PostDetails from "./postDetails"

const PostPreview = ({ post }) => {
  const { slug, image, alt, title, date, timeToRead, excerpt } = post
  return (
    <article
      css={css`
        display: flex;
        margin: 2rem auto;
        max-width: 600px;
        border-bottom: 1px solid #ddd;
        /* position: relative; used for gradient bottom */ 
        padding-bottom: 1rem;

        @media screen and (max-width: ${BREAKPOINTS.md}) {
          flex-direction:column;
        }       

        /* bottom gradients for post previews.. might be a little too much */
        /* &:after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          z-index: -1;
          background: linear-gradient(
            to left,
            ${COLORS.gradientDark},
            ${COLORS.gradientLight}
          );
        } */
      `}
    >
      <Link
        to={slug}
        css={css`
          margin: 0 1rem 0 0;
          width: 150px;
          display: none;
        `}
      >
        {// serve default image if no image declared in post frontmatter
        !image ? (
          <DefaultPreviewImage />
        ) : (
          <Image
            fluid={image.sharp.fluid}
            css={css`
              width: 150px;
              * {
                margin-top: 0;
              }
            `}
            alt={alt}
          />
        )}
      </Link>
      <div>
        <h3>
          <Link
            to={slug}
            css={css`
              color: rgba(0, 100, 202, 1);
              font-size: 2rem;
              font-weight: 400;
            `}
          >
            {title}
          </Link>
        </h3>
        <PostDetails date={date} timeToRead={timeToRead} />
        <p>{excerpt}</p>
        <ReadLink to={slug}>read &rarr; </ReadLink>
      </div>
    </article>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }),
}

export default PostPreview
