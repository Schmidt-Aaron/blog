// blog post list page
import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/usePosts"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostPreview from "../components/PostPreview"
import TitleWithGradient from "../components/TitleWithGradient"
import PageFooterLinks from "../components/PageFooterLinks"

const Posts = () => {
  const posts = usePosts()
  //TODO fix posts query or filter after the fact
  return (
    <Layout>
      <SEO title="Blog" />
      <TitleWithGradient>Blog</TitleWithGradient>
      <p>
        Here you will find a collection of snippets, how-tos, and longer form
        walkthroughs that I have written to facilitate my own personal learning.
        My hope is that you find them useful. As always, if you find any errors
        in my writing please help me fix them by submitting a pull request, or
        reaching out.
      </p>
      {posts.map(post => {
        if (
          post.status === "publish" ||
          process.env.NODE_ENV === "development"
        ) {
          return <PostPreview key={post.slug} post={post} />
        }
      })}
      <PageFooterLinks
        leftLinkTo="/about"
        leftLinkText="About Me"
        rightLinkTo="/contact"
        rightLinkText="Contact Me"
      />
    </Layout>
  )
}

export default Posts
