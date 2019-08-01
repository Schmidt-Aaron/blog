import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Aaron" />
    <h1>About Me</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default About
