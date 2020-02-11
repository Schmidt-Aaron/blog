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
      The best ways to contact me are via{" "}
      <a href="mailto:hello&#64;aaronms&#46;com">email</a> or via LinkedIn. You
      can use the links on the bottom right-hand side of the page.
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
