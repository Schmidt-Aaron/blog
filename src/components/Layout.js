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
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "./mdx"
import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"
import { HorizontalGradientBar } from "./TitleWithGradient"
// import CodeBlock from "./mdx/CodeBlock"

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
          margin: 0 auto 2rem;
          max-width: 600px;
          padding: 0 1rem;
        `}
      >
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </main>
      <Footer />
      <HorizontalGradientBar />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
