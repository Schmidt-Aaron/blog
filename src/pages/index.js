import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

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
            undergoing drastic changes to both the structure and content. I
            expect the new site to go live later this month (Feb 2020). This
            page will serve as a placeholder until then.
          </p>

          <p>
            I am always on the lookout for new projects. If you have something
            in mind please get in contact :)
          </p>
        </div>
      </section>
      <section className="section">
        <div>
          <h2>About me.</h2>

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
            In my professional career I have had the opportunity to wear many
            different hats, from managing a medical laboratory, running my own
            personal training studio to owning the online marketing of a growing
            fertility clinic. Throughout it all, I try to approach the problem
            at hand with an open mind and attention to detail. I value
            critical-thinking and continuous self-education in both my
            professional and private lives.
          </p>
          <p>
            I like to build websites using JavaScript (React & Node). My passion
            is creating excellent user experiences that load quickly and follow
            SEO best practices. My craft is driven by the belief that all great
            work is created through a unswerving attention to the small details.
            Sometimes I use WordPress.{" "}
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
