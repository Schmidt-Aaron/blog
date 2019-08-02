import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

// for post preview page
export const previewImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.placeholderImage.childImageSharp.fluid}
      css={css`
        * {
          margin-top: 0;
        }
      `}
      alt="This is a Placeholder Image 🙊"
    />
  )
}
