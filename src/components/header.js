/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../images/A_logo.svg"
import NavMenu from "./NavMenu"

const MenuLink = styled(Link)`
  margin-right: 1rem;
  justify-self: flex-end;
  color: #eee;
  text-decoration: none;

  &:hover {
    color: white;
  }
`

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
        max-width: 960px;
        padding: 0.5rem 1.0875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
            color: #eee;
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
      <NavMenu />
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
