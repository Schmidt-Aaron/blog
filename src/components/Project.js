/**
 *
 * @param {*} props
 *
 * project name: String
 * link to project : String
 * project description : String ;
 * project constraints : STring ;
 * project image - desktop : String; Path to img
 * project image - mobile : String; Path to img
 * project image - tablet String; Path to img
 * tech used: []
 *
 */

/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import { COLORS } from "../templates/theme"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Project = props => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "temp.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(image)
  return (
    <aside
      css={css`
        height: 400px;
        max-width: 800px;
        display: flex;
        flex-basis: 95%;
        margin: 1rem auto;
        padding: 1rem;
        border: 1px dotted gray;
      `}
    >
      <div
        css={css`
          width: 300px;
          margin-right: 2rem;
        `}
      >
        <Image fluid={image.sharp.fluid} />
      </div>
      <div>
        <h2>Project title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor
          officia quos molestias odit id eveniet sit beatae, alias ad error
          assumenda delectus at dolores saepe atque cupiditate enim non!
        </p>
        <div
          css={css`
            display: flex;

            & :first-of-type(span) {
              margin-right: 1rem;
            }
          `}
        >
          <span>description</span>{" "}
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            assumenda autem, atque voluptates nesciunt rem. Sed sint in
            praesentium facilis, fugit qui itaque? Quas quasi recusandae
            molestiae illo distinctio aperiam!
          </span>
        </div>
      </div>
    </aside>
  )
}

export default Project
