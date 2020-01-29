/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

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
        grid-template-rows: 60px 1fr 100px;
      `}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 800px;
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
