/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../images/A_logo.svg"
import NavMenu from "./NavMenu"
import { BREAKPOINTS } from "../templates/theme"

// const MenuLink = styled(Link)`
//   margin-left: 1rem;
//   justify-self: flex-end;
//   color: #eee;
//   text-decoration: none;

//   &:hover {
//     color: white;
//   }
// `

const Header = ({ siteTitle }) => (
  <header
    css={css`
      height: 60px;
      width: 100%;
      margin: 0 auto 1rem;
      padding: 0 1rem 0 2rem;
      box-shadow: 0px 0px 10px 0px rgba(25, 25, 25, 0.2);

      @media screen and (max-width: ${BREAKPOINTS.md}) {
        padding: 0 1rem 0;
      }
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
          font-size: 1.2rem;
          font-weight: 400;
          margin: 0;

          @media screen and (max-width: ${BREAKPOINTS.md}) {
            font-size: 1.1rem;
          }
        `}
      >
        <Link
          to="/"
          css={css`
            color: hsla(0, 0%, 0%, 0.8);
            text-decoration: none;
          `}
        >
          {/* {siteTitle} */}
          <span className="brand">&lt;Aaron /&gt;</span>
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
