/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div
      css={css`
        min-height: 100vh;
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: auto 1fr auto;
      `}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 960px;
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0;
        `}
      >
        {children}
      </main>
      <footer
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 960px;
          align-self: bottom;
          text-align: center;
        `}
      >
        © {new Date().getFullYear()}, {data.site.siteMetadata.author}. Made with
        ❤️ and lots of ☕{` `}
        <p>
          Built using <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted
          on Netlify
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
