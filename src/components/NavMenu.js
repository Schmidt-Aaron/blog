/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const MenuLink = props => {
  // docs: https://reach.tech/router/api/Link

  const linkStyle = css`
    margin-right: 1rem;
    justify-self: flex-end;
    color: #f8f8f8;
    text-decoration: none;

    &:hover {
      color: white;
    }

    &:after {
      content: "";
      display: block;
      width: 0%;
      padding-top: 0px;
      border-bottom: 1px solid #f8f8f8;
      transition: all 0.3s ease-in;
    }

    &:hover:after {
      width: 100%;
    }
  `

  const activeLinkStyle = {
    marginRight: `1rem`,
    justifySelf: `flex-end`,
    color: `#38ef7d`,
    textDecoration: `none`,

    "& :after": {
      content: `""`,
      display: `block`,
      width: `100%`,
      paddingTop: 0,
      borderBottom: `1px solid #FFF`,
    },
  }

  const isActive = ({ isCurrent }) => {
    // toggle for active link
    return isCurrent ? { style: { activeLinkStyle } } : { style: { linkStyle } }
  }

  return <Link css={linkStyle} activeStyle={activeLinkStyle} {...props} />
}

const NavMenu = () => {
  return (
    <nav
      css={css`
        display: flex;
      `}
    >
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/projects">Projects</MenuLink>
      <MenuLink to="/posts">Blog</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </nav>
  )
}

export default NavMenu
