/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css, jsx } from "@emotion/core"
import { COLORS, BREAKPOINTS } from "../templates/theme"

const ImageBackground = styled(BackgroundImage)`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  background-size: cover;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 97%, 53% 97%, 50% 100%, 47% 97%, 0 97%);

  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 2rem 0;
  max-width: 750px;
  color: white;

  h1 {
    font-size: 4rem;
    color: white;
    text-shadow: 3px 2px 2px #565656;
  }
  h2 {
    color: white;
    text-shadow: 3px 2px 2px #565656;
  }
  h3 {
    color: white;
  }
  p {
    font-size: 1.5rem;
  }
@media screen and (max-width: ${BREAKPOINTS.md}{
    h1{
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "back4.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Photo by Mathyas Kurmann on Unsplash https://unsplash.com/@mathyaskurmann

  const backgroundStack = [
    `linear-gradient(to right, ${COLORS.gradientLightTransparent}, ${COLORS.gradientDarkTransparent})`,
    image.sharp.fluid,
  ]

  return (
    <ImageBackground tag="section" fluid={backgroundStack}>
      <TextBox>
        <h1>Hi, I'm Aaron.</h1>

        <h2>
          I am a JavaScript developer, digital marketer, and audiobook fanatic.
        </h2>
      </TextBox>
      <div
        css={css`
          position: absolute;
          bottom: 5%;
          color: white;
          cursor: pointer;
        `}
      >
        <a
          href="#about"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          Learn more
        </a>
      </div>
    </ImageBackground>
  )
}

export default Hero
