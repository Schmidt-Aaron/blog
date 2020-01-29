import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"
import ReadLink from "../components/ReadLink"
import PageFooterLinks from "../components/PageFooterLinks"

const About = () => (
  <Layout>
    <SEO title="About Aaron" />
    <TitleWithGradient>About Me</TitleWithGradient>
    <p>
      Hi. My name is Aaron Schmidt. I am a web developer and digital marketer
      living in the beautiful Pacific Northwest. I spent my formative years
      around the ocean and as a result, I am a bit of an island boy at heart. I
      grew up playing in the woods and beaches of the San Juan Islands. After
      graduating from high school on Orcas Island I decided that it might be
      time for a change of scenery. As a result, I found myself studying in
      Oahu. I finished my undergrad there and earned a B.S. in nutrition.
    </p>

    <p>
      I possess an analytical mentality and enjoy solving hard problems. In my
      professional career I have had the opportunity to wear many different
      hats, from managing a medical laboratory, running my own personal training
      studio to owning the online marketing of a growing fertility clinic. I
      value learning and continuous self-education.
    </p>
    <p>
      I like to build websites using JavaScript (React + Node + Express). Gatsby
      is my current go-to for most projects as I find it a joy to work with.
      Sometimes I use WordPress.{" "}
    </p>

    <p>
      My hobbies include just about anything ocean related, reading (see what I
      am{" "}
      <a
        href="https://www.goodreads.com/review/list/45209385-aaron-schmidt?shelf=currently-reading#"
        rel="nofollow noreferral"
      >
        currently reading
      </a>
      ), code, cooking, kickball, hiking, and a good IPA.
    </p>

    <PageFooterLinks
      leftLinkTo="/"
      leftLinkText="Go Home"
      rightLinkTo="/posts"
      rightLinkText="See Recent Posts"
    />
  </Layout>
)

export default About
