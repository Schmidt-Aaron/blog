/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css, jsx } from "@emotion/core"

const ImageBackground = styled(BackgroundImage)`
  /* background-image: url("../images/jellyfish.jpg"); */
  background-position: top 20% center;
  background-size: cover;
  height: 100vh;

  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "boat-calm-waters.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Hello.</h1>
        <h2>I'm Aaron, a full stack developer living in beautiful Seattle.</h2>
        <p>
          <Link to={"/about"}>Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
