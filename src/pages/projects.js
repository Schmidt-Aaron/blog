/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import Layout from "../templates/homeLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import latestPosts from "../hooks/latestPosts"
import PostPreviewShort from "../components/PostPreviewShort"
import { COLORS } from "../templates/theme"
import HomeBanner from "../components/HomeBanner"
import Project from "../components/Project"

const Section = styled(`section`)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RecentPosts = () => {
  const posts = latestPosts()
  return (
    <>
      {posts.map(post => {
        return <PostPreviewShort key={post.slug} post={post} />
      })}
    </>
  )
}

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Hero />
      <Section>more about me</Section>
      <Section>
        <HomeBanner title="Recent Work" />
        <Project />
        <Project />
        <Project />
      </Section>
      <Section>
        <HomeBanner title="Recent Posts" />
        <div
          css={css`
            margin-top: -1rem;
            position: relative;
          `}
        >
          <RecentPosts />
          <svg
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            css={css`
              position: absolute;
              top: 20%;
              left: -30%;
              z-index: 1;
              transform: rotate(45deg);
              transition: transform 1s ease-in;

              &:hover {
                transform: rotate(315deg) scale(0.5);
              }
            `}
          >
            <defs>
              <linearGradient
                id="squareGradientTop"
                gradientTransform="rotate('45deg')"
              >
                <stop offset="5%" stop-color={COLORS.gradientLight} />
                <stop offset="95%" stop-color={COLORS.gradientDark} />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              height="200"
              width="200"
              stroke="green"
              fill="url('#squareGradientTop')"
              stroke-width="2"
            />
          </svg>
          <svg
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            css={css`
              position: absolute;
              bottom: 20%;
              right: -30%;
              z-index: 1;
              transform: rotate(45deg);
              transition: all 2s ease-in;

              &:hover {
                transform: rotate(405deg) scale(0.5);
              }
            `}
          >
            <defs>
              <linearGradient
                id="squareGradient"
                gradientTransform="rotate(45deg)"
              >
                <stop offset="5%" stop-color={COLORS.gradientLight} />
                <stop offset="95%" stop-color={COLORS.gradientDark} />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              height="150"
              width="150"
              stroke="green"
              fill="url('#squareGradient')"
              stroke-width="2"
            />
          </svg>
        </div>
      </Section>
    </Layout>
  )
}

export default Projects
