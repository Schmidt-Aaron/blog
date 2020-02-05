/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import ReadLink from "./ReadLink"

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

export default PageFooterLinks
