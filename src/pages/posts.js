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
  // console.log(posts)
  //TODO fix posts query
  return (
    <Layout>
      <SEO title="Blog" />
      <TitleWithGradient>Blog</TitleWithGradient>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <PageFooterLinks
        leftLinkTo="/"
        leftLinkText="Go Home"
        rightLinkTo="/about"
        rightLinkText="Read About Me"
      />
    </Layout>
  )
}

export default Posts
