import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TitleWithGradient from "../components/TitleWithGradient"
import PageFooterLinks from "../components/PageFooterLinks"

const About = () => (
  <Layout>
    <SEO title="About Aaron" />
    <TitleWithGradient>About Me</TitleWithGradient>
    <p>
      I am a web developer and digital marketer living in the beautiful Pacific
      Northwest. I spent my formative years around the ocean and as a result, I
      am a bit of an island boy at heart. I grew up playing in the woods and
      beaches of the San Juan Islands. After graduating from high school on
      Orcas Island I decided that it might be time for a change of scenery. As a
      result, I found myself studying in Oahu. I finished my undergrad there and
      earned a B.S. in nutrition.
    </p>

    <p>
      In my professional career I have had the opportunity to wear many
      different hats, from managing a medical laboratory, running my own
      personal training studio to owning the online marketing of a growing
      fertility clinic. Throughout it all, I try to approach the problem at hand
      with an open mind and attention to detail. I value critical-thinking and
      continuous self-education in both my professional and private lives.
    </p>
    <p>
      I like to build websites using JavaScript (React + Node + Express). My
      passion is creating excellent user experiences that load quickly and
      follow SEO best practices. I believe that it is the attention to the small
      details that make a website great. Gatsby is my current go-to for most
      projects as I find it a joy to work with. Sometimes I use WordPress.{" "}
    </p>

    <p>
      My hobbies include just about anything ocean related, reading (
      <a
        href="https://www.goodreads.com/review/list/45209385-aaron-schmidt?shelf=currently-reading#"
        rel="nofollow noreferral"
      >
        see what I am currently reading
      </a>
      ), code, cooking, kickball, hiking, and drinking a good IPA.
    </p>

    <PageFooterLinks
      leftLinkTo="/"
      leftLinkText="Home"
      rightLinkTo="/posts"
      rightLinkText="Recent Posts"
    />
  </Layout>
)

export default About
