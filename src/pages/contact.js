/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"
import PageFooterLinks from "../components/PageFooterLinks"

const Contact = () => (
  <Layout>
    <SEO title="Contact Aaron" />
    <TitleWithGradient>Say Hello</TitleWithGradient>
    <p>
      The best ways to contact me are via email or LinkedIn. You can also use
      this form Please use the links on the left-hand side of the page to reach
      out.
    </p>
    <PageFooterLinks
      leftLinkTo="/posts"
      leftLinkText="Recent Posts"
      rightLinkTo="/"
      rightLinkText="Home"
    />
  </Layout>
)

export default Contact
