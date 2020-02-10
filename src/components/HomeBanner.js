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
        position: relative;
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
      <div
        css={css`
          border: 1px solid white;
          position: absolute;
          bottom: 0;
          right: 0;
          height: 10%;
          width: 4%;
          z-index: 2;
        `}
      ></div>
    </div>
  )
}

export default HomeBanner

HomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
}
