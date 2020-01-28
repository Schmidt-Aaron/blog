import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

//Temp imports
import "../templates/tempStyles.css"

// const IndexPage = () => (
//   <>
//     <Hero />
//     <Layout>
//       <SEO title="Home" />
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//     </Layout>
//   </>
// )

// temp landing page
const year = new Date().getFullYear()

const IndexPage = () => (
  <>
    <SEO title="Aaron Schmidt | Coming soon to a browser near you!" />
    <main className="main">
      <header className="tempHeader">
        <div>
          <span className="brand">&lt;Aaron /&gt;</span>
        </div>
      </header>
      <div className="contact-me">
        ~{" "}
        <a
          title="If your email client isn't opening then you haven't set your default client. My email is: hello@aaronms.com"
          href="mailto:hello+website@aaronms.com?subject=Getting%20in%20touch"
        >
          Email Me
        </a>{" "}
        &#183;{" "}
        <a
          href="https://www.linkedin.com/in/aaronmss/"
          rel="noreferrer nofollow"
        >
          Connect on LinkedIn
        </a>{" "}
        ~
      </div>
      <section className="section">
        <div>
          <h1>Hi, I'm Aaron!</h1>
          <h3>Web Developer | Digital Marketer | Audiobook Fanatic</h3>
          <p>
            Welcome! This website is a work in progress and as such will be
            undergoing drastic changes to the structure and content starting in
            February 2020. This page will serve as a placeholder until then.
          </p>

          <p>
            I am always on the lookout for my next project. If you have
            something in mind please get in contact :)
          </p>
        </div>
      </section>
      <section className="section">
        <div>
          <h2>About Me.</h2>

          <p>
            I am a web developer and digital marketer living in the beautiful
            Pacific Northwest. I spent my formative years around the ocean and
            as a result, I am a bit of an island boy at heart. I grew up playing
            in the woods and beaches of the San Juan Islands. After graduating
            from high school on Orcas Island I decided that it might be time for
            a change of scenery. As a result, I found myself studying in Oahu. I
            finished my undergrad there and earned a B.S. in nutrition.
          </p>

          <p>
            I possess an analytical mentality and enjoy solving hard problems.
            In my professional career I have had the opportunity to wear many
            different hats, from managing a medical laboratory, running my own
            personal training studio to owning the online marketing of a growing
            fertility clinic. I value learning and continuous self-education.
          </p>
          <p>
            I like to build websites using JavaScript (React + Node + Express).
            Gatsby is my current go-to for most projects as I find it a joy to
            work with. Sometimes I use WordPress.{" "}
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
        </div>
      </section>
      <section className="section">
        <div>
          <h2>Getting in touch.</h2>
          <p className="contact-fullscreen">
            The best ways to contact me are via email or LinkedIn. Please use
            the links on the left-hand side of the page to reach out.{" "}
            <span className="small">
              *Note that the email link will not work if you do not have a
              default mail client set up*
            </span>
          </p>
          <p className="contact-mobile">
            The best ways to contact me are via email, or LinkedIn. Please use
            the links below to reach out.{" "}
            <span className="small">
              *Note that the email link will not work if you do not have a
              default mail client set up*
            </span>
          </p>
          <p>Thanks for stopping by!</p>
          <div className="contact-bottom">
            ~{" "}
            <a
              title="If your email client isn't opening then you haven't set your default client. My email is: hello@aaronms.com"
              href="mailto:hello+website@aaronms.com?subject=Getting%20in%20touch"
            >
              Email Me
            </a>{" "}
            &#183;{" "}
            <a
              href="https://www.linkedin.com/in/aaronmss/"
              rel="noreferrer nofollow"
            >
              Connect on LinkedIn
            </a>{" "}
            ~
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>
          <p>
            &copy;{year} Aaron Schmidt -{" "}
            <a
              href="https://github.com/Schmidt-Aaron/blog"
              rel="nofollow noreferral"
            >
              Source Code
            </a>
          </p>
        </div>
      </footer>
    </main>
  </>
)

export default IndexPage
