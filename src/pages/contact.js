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
      The best ways to contact me are via email or LinkedIn. Please use the
      links on the left-hand side of the page to reach out.{" "}
      <span
        css={css`
          font-size: 0.8rem;
        `}
      >
        *Note that the email link will not work if you do not have a default
        mail client set up*
      </span>
    </p>
    <PageFooterLinks
      leftLinkTo="/"
      leftLinkText="Go Home"
      rightLinkTo="/posts"
      rightLinkText="See Recent Posts"
    />
  </Layout>
)

export default Contact
