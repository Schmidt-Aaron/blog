import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const MenuLink = styled(Link)`
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
const NavMenu = () => {
  return (
    <nav
      css={css`
        display: flex;
      `}
    >
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/pojects">Projects</MenuLink>
      <MenuLink to="/posts">Blog</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </nav>
  )
}

export default NavMenu
