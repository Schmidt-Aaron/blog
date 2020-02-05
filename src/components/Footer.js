/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import { FaLinkedinIn, FaTwitter, FaRss, FaGithub } from "react-icons/fa"

const Footer = ({data}) => {
  const { author, siteRepo, twitter, linkedIn, github } = data.site.siteMetadata

  return (
    <footer
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        max-width: 960px;
        text-align: center;
      `}
    >
      <div>
        © {new Date().getFullYear()}, {author}. Made with ❤️ and lots of ☕{` `}
        <p>
          {/* Built using <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on
        Netlify */}
          <a href={siteRepo}>Source Code</a>
        </p>
      </div>
      <div>
        <a href={linkedIn}>
          <FaLinkedinIn />
        </a>
        <a href={github}>
          <FaGithub />
        </a>
        <a href={twitter}>
          <FaTwitter />
        </a>
        <a href={twitter}>
          <FaRss />
        </a>
      </div>
    </footer>
  )
}

export default props => ()
