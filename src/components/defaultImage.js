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
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      fixed={data.placeholderImage.childImageSharp.fixed}
      css={css`
        * {
          margin-top: 0;
        }
      `}
      alt="This is a Placeholder Image 🙊"
    />
  )
}
