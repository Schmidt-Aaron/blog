import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import Logo from "../images/Logov1_animated.svg"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: #834d9b; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #d04ed6,
        #834d9b
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #d04ed6,
        #834d9b
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        css={css`
          font-size: 1.5rem;
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          {/* {siteTitle} */}
          <Logo
            alt={siteTitle}
            css={css`
              fill: white;
              stroke: white;
            `}
          />
        </Link>
      </h1>
      <Link to="/about">About</Link>
      <Link to="/pojects">Projects</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Aaron Schmidt`,
}

export default Header
