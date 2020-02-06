/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"
import PropTypes from "prop-types"

export default function PostDetails(props) {
  const { date, timeToRead } = props
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        line-height: 100%;
        margin-bottom: 1rem;
      `}
    >
      <span>
        <FaRegCalendarAlt
          css={css`
            vertical-align: bottom;
          `}
        />{" "}
        Published {date}
      </span>
      <span>
        <FaRegClock
          css={css`
            vertical-align: bottom;
          `}
        />{" "}
        {timeToRead}
      </span>
    </div>
  )
}

PostDetails.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
}
