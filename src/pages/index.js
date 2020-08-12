import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = () => {
  
  return (
    <Layout>
      <SEO title="All posts" />

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   allContentfulPost {
     edges {
      node {
        title
        subtitle
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
       }
     }
   }
  }
`
