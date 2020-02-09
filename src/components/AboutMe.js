/** @jsx jsx */

import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import Layout from "../templates/homeLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import latestPosts from "../hooks/latestPosts"
import PostPreviewShort from "../components/PostPreviewShort"
import { COLORS } from "../templates/theme"
import ReadLink from "../components/ReadLink"
import Image from "gatsby-image"

const Section = styled(`section`)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutMe = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpg" }) {
        sharp: childImageSharp {
          fixed(quality: 85, width: 380) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section id="about">
      <div
        css={css`
          display: flex;

          padding: 1rem;
        `}
      >
        <div
          css={css`
            width: 400px;
            height: 400px;
            background: linear-gradient(
              to right,
              ${COLORS.gradientLight},
              ${COLORS.gradientDark}
            );
            border-radius: 50%;
            margin-right: 4rem;
            position: relative;
          `}
        >
          <Image
            fixed={image.sharp.fixed}
            style={{ position: "absolute" }}
            css={css`
              height: 380px;
              width: 380px;
              border-radius: 50%;
              top: 50%;
              right: 50%;
              transform: translate(50%, -50%);
            `}
          />
        </div>
        <div
          css={css`
            max-width: 500px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1.2rem;
          `}
        >
          <h3
            css={css`
              font-size: 1.6rem;
            `}
          >
            My name is Aaron Schmidt. I like to build things for the web. My
            passion is developing fast and responsive sites that deliver an
            excellent user experience.
          </h3>

          <p>
            Do you have a project, idea, or problem that you would like to
            discuss?
          </p>

          <ReadLink to="/contact">Let's talk.</ReadLink>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe