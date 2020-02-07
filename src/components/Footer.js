/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, StaticQuery } from "gatsby"
import { css, jsx } from "@emotion/core"
import { FaLinkedinIn, FaTwitter, FaRss, FaGithub } from "react-icons/fa"

const Footer = ({ data }) => {
  const {
    author,
    siteRepo,
    social: { twitter, linkedIn, github },
  } = data.site.siteMetadata

  // todo add rss feed then add rss link

  return (
    <footer
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 2rem;
        align-items: center;
        width: 100%;
        max-width: 960px;

        @media screen and (max-width: 760px) {
          padding: 0 1rem;
        }
      `}
    >
      <div>
        <p
          css={css`
            margin: auto;
            line-height: 100%;
          `}
        >
          © {new Date().getFullYear()} {author}.
        </p>
      </div>
      {/* <div>
        <p>
          Made with ❤️ and lots of ☕{` `}
          Built using <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on
        Netlify 
          <a href={siteRepo} title="The source code for this website">
            Source Code
          </a>
        </p>
      </div> */}
      <div>
        <a href={linkedIn} title="Aaron's LinkedIn">
          <FaLinkedinIn
            size={28}
            css={css`
              color: #777;
              margin-left: 0.5rem;
              transition: all 0.5s ease-in; // todo fix svg transitions
              &:hover {
                color: #2867b2;
              }
            `}
          />
        </a>
        <a href={github} title="Aaron's Github">
          <FaGithub
            size={28}
            css={css`
              color: #777;
              margin-left: 0.5rem;
              transition: color 0.5s ease-in;
              &:hover {
                color: #24292e;
              }
            `}
          />
        </a>
        <a href={twitter} title="Aaron's Twitter">
          <FaTwitter
            size={28}
            css={css`
              color: #777;
              margin-left: 0.5rem;
              transition: color 0.5s ease-in;
              &:hover {
                color: #1da1f2;
              }
            `}
          />
        </a>
        {/* <a href={twitter} title="The RSS feed for this site">
          <FaRss />
        </a> */}
      </div>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            siteRepo
            social {
              twitter
              github
              linkedIn
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)

Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string.isRequired,
        siteRepo: PropTypes.string.isRequired,
        social: PropTypes.shape({
          twitter: PropTypes.string.isRequired,
          github: PropTypes.string.isRequired,
          linkedIn: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
