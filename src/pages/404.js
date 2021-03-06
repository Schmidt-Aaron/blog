import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description="You have reached a page that does not exist. It's probably my fault so don't beat yourself up."
    />
    <TitleWithGradient>NOT FOUND</TitleWithGradient>
    <p>The page you are looking isn't here...</p>
    <p>
      <Link to="/">Let's go home &rarr;</Link>
    </p>
  </Layout>
)

export default NotFoundPage
