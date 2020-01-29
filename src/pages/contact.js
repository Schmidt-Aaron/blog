import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"

const Contact = () => (
  <Layout>
    <SEO title="Contact Aaron" />
    <TitleWithGradient>Say Hello</TitleWithGradient>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default Contact
