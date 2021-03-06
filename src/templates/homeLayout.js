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

import Header from "../components/Header"
import "../components/layout.css"
import "./scrollbar.css"
import Footer from "../components/Footer"
import { HorizontalGradientBar } from "../components/TitleWithGradient"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
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
      {/* <Helmet> */}
      {/* <meta
          property="og:image"
          content={
            this.props.pageContext.images[0].localFile.childImageSharp.fluid.src
          }
        /> */}
      {/* </Helmet> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          margin-top: -1rem;
        `}
      >
        {children}
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
