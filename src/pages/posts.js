// blog post list page
import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/use-Posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

const Posts = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Posts
