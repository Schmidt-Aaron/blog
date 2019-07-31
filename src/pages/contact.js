import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Aaron" />
    <h1>Contact Me</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default Contact
