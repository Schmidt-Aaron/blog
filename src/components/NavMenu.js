/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

// const MenuLink = styled(Link)`
//   margin-right: 1rem;
//   justify-self: flex-end;
//   color: #f8f8f8;
//   text-decoration: none;

//   &:hover {
//     color: white;
//   }

//   &:after {
//     content: "";
//     display: block;
//     width: 0%;
//     padding-top: 0px;
//     border-bottom: 1px solid #f8f8f8;
//     transition: all 0.3s ease-in;
//   }

//   &:hover:after {
//     width: 100%;
//   }

//   .active {
//     color: red;

//     /* &:after {
//       content: "";
//       display: block;
//       width: 100%;
//       padding-top: 0;
//       border-bottom: 1px solid #fff;
//     } */
//   }
// `

const MenuLink = props => {
  // docs: https://reach.tech/router/api/Link

  const linkStyle = css`
    margin-left: 1rem;
    justify-self: flex-end;
    color: rgba(0, 100, 202, 1);
    text-decoration: none;

    &:hover {
      color: rgba(0, 100, 202, 0.8);
    }

    &:after {
      content: "";
      display: block;
      width: 0%;
      padding-top: 0px;
      border-bottom: 1px solid #11998e; /* TODO change color*/
      transition: all 0.3s ease-in;
    }

    &:hover:after {
      width: 100%;
    }
  `

  const activeLinkStyle = {
    color: `#38ef7d`,

    "&:after": {
      width: `100%`,
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
      <MenuLink activeClassName="active" to="/about">
        About
      </MenuLink>
      {/* <MenuLink to="/projects">Projects</MenuLink> */}
      <MenuLink to="/posts">Blog</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </nav>
  )
}

export default NavMenu
