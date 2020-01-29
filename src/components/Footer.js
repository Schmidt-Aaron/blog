/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css, jsx } from "@emotion/core"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          author
          siteRepo
        }
      }
    }
  `)

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
      © {new Date().getFullYear()}, {data.site.siteMetadata.author}. Made with
      ❤️ and lots of ☕{` `}
      <p>
        {/* Built using <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on
        Netlify */}
        <a href={data.site.siteMetadata.siteRepo}>Source Code</a>
      </p>
    </footer>
  )
}
