/** @jsx jsx */

import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
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
          fixed(quality: 85, width: 340) {
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
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, auto));
          grid-template-rows: auto;
          place-items: center center;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            width: 350px;
            height: 350px;
            background: linear-gradient(
              to right,
              ${COLORS.gradientLight},
              ${COLORS.gradientDark}
            );
            border-radius: 50%;
            position: relative;
          `}
        >
          <Image
            fixed={image.sharp.fixed}
            style={{ position: "absolute" }}
            css={css`
              height: 97%;
              width: 97%;
              border-radius: 50%;
              top: 50%;
              right: 50%;
              transform: translate(50%, -50%);
            `}
          />
        </div>
        <div
          css={css`
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1.2rem;
          `}
        >
          <h2
            css={css`
              font-size: 1.9rem;
              line-height: 2.1rem;
              color: rgba(0, 0, 0, 0.8);
            `}
          >
            My name is Aaron Schmidt. I build things for the web.
          </h2>
          {/* <p>
            I like to create beautiful user experiences with a strong technical
            foundation of excellent load speeds and search engine optimization
            out of the box. Your customers matter to me.
          </p> */}

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
