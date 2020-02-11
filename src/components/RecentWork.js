/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import HomeBanner from "../components/HomeBanner"
import Project from "../components/Project"

const Section = styled(`section`)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RecentWork = () => {
  return (
    <Section id="work">
      <HomeBanner title="Recent Work" />
      <Project />
      <Project />
      <Project />
    </Section>
  )
}

export default RecentWork
