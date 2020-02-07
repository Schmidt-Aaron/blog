/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import { COLORS } from "../templates/theme"
import PropTypes from "prop-types"

const HomeBanner = props => {
  return (
    <div
      css={css`
        height: 300px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(
          to right,
          ${COLORS.gradientLight},
          ${COLORS.gradientDark}
        );
        clip-path: polygon(0 0, 100% 0, 100% 90%, 96% 100%, 0 100%);
      `}
    >
      <h2
        css={css`
          color: white;
        `}
      >
        {props.title}
      </h2>
    </div>
  )
}

export default HomeBanner

HomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
}
