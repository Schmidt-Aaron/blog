/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import Layout from "../templates/homeLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

const Section = styled(`section`)`
  height: 100vh;
`

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Hero />
    <Section>more about me</Section>
    <Section>Portfolio</Section>
    <Section>latest posts</Section>
  </Layout>
)

export default Projects
