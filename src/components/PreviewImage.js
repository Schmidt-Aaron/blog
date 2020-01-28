/** @jsx jsx */
import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"

// for post preview page
const DefaultPreviewImage = props => {
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

export default DefaultPreviewImage
