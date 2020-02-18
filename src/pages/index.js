/** @jsx jsx */

import React from "react"
import { css, jsx } from "@emotion/core"
import Layout from "../templates/homeLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import RecentPosts from "../components/RecentPosts"
import AboutMe from "../components/AboutMe"
import RecentWork from "../components/RecentWork"

const Index = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <AboutMe />
      {/* <RecentWork /> */}
      <RecentPosts />
    </Layout>
  )
}

export default Index
