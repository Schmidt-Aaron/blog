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
      height: 60px;
      width: 100%;
      margin: 0 auto;
      box-shadow: 0px 0px 10px 0px rgba(25, 25, 25, 0.2);
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        height: 100%;
        max-width: 960px;
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
            color: rgba(62, 148, 236, 0.8);
            text-decoration: none;
          `}
        >
          {/* {siteTitle} */}
          Aaron
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
