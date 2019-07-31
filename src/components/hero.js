import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Aaron, a full stack developer living in beautiful Seattle.</h2>
      <p>
        Need a developer? <Link to={"/about"}>Learn about me &rarr;</Link>
      </p>
    </div>
  )
}

export default Hero
