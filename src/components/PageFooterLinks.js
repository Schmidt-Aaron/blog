/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import ReadLink from "./ReadLink"
import PropTypes from "prop-types"

const PageFooterLinks = props => {
  const { leftLinkTo, leftLinkText, rightLinkTo, rightLinkText } = props
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      `}
    >
      <ReadLink to={leftLinkTo}>&larr;{leftLinkText}</ReadLink>
      <ReadLink to={rightLinkTo}>{rightLinkText}&rarr;</ReadLink>
    </div>
  )
}

PageFooterLinks.propTypes = {
  leftLinkText: PropTypes.string,
  leftLinkTo: PropTypes.string,
  rightLinkText: PropTypes.string,
  rightLinkTo: PropTypes.string,
}

export default PageFooterLinks
