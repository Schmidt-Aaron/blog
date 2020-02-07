import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <TitleWithGradient>NOT FOUND</TitleWithGradient>
    <p>You found a page that doesn&#39;t exist....</p>
    <p>
      <Link to="/">Let's go home &rarr;</Link>
    </p>
  </Layout>
)

export default NotFoundPage
