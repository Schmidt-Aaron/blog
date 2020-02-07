/**
 *
 * blog post preview component used on homepage -  no image support
 *
 */

/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import ReadLink from "./ReadLink"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { COLORS, BREAKPOINTS } from "../templates/theme"
import PostDetails from "./PostDetails"

const PostPreviewShort = ({ post }) => {
  const { slug, title, date, timeToRead, excerpt } = post
  return (
    <article
      css={css`
        display: flex;
        min-height: 210px;
        margin: 0 auto 2rem;
        padding: 1rem;
        max-width: 600px;
        z-index:2;
        position: relative; /* used for gradient bottom  */
        /* padding-bottom: 1rem; */
        box-shadow: 2px 3px 10px -4px rgba(0, 0, 0, 0.7);
        border-radius: 1rem;
        background-color: white;

        &:hover {
          transform: translateY(2px);
          box-shadow: 2px 1px 5px -3px rgba(0, 0, 0, 0.7);
        }

        @media screen and (max-width: ${BREAKPOINTS.md}) {
          flex-direction: column;
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
      <div>
        <h3>
          <Link
            to={slug}
            css={css`
              color: rgba(0, 100, 202, 1);
              font-size: 1.5rem;
              font-weight: 400;
            `}
          >
            {title}
          </Link>
        </h3>
        <PostDetails
          date={date}
          timeToRead={timeToRead}
          css={css`
            margin-bottom: 0.2rem;
          `}
        />
        <p
          css={css`
            position: relative;
            margin-bottom: 0;
          `}
        >
          {excerpt}{" "}
          <ReadLink
            to={slug}
            css={css`
              position: absolute;
              right: 0;
            `}
          >
            read &rarr;{" "}
          </ReadLink>
        </p>
      </div>
    </article>
  )
}

PostPreviewShort.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }),
}

export default PostPreviewShort
