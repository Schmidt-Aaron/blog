/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import Layout from "../templates/homeLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import HomeBanner from "../components/HomeBanner"
import Project from "../components/Project"
import RecentPosts from "../components/RecentPosts"
import AboutMe from "../components/AboutMe"

const Section = styled(`section`)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Hero />
      <AboutMe />
      <Section id="work">
        <HomeBanner title="Recent Work" />
        <Project />
        <Project />
        <Project />
      </Section>
      <RecentPosts />
    </Layout>
  )
}

export default Projects
