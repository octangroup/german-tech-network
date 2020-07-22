import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioSection from "./portfolio"
// import Img from "gatsby-image"
// import styled from "styled-components"


// const Post = styled.div`
//     display:flex;
// `
// const PostImage = styled.div`
//     flex: 25%;
//     margin-right: 1rem;
// `
// const PostText = styled.div`
//     flex: 75%;
// `
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allContentfulPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* {posts.map(({ node }) => {
        // const title = node.title || node.slug
        return (
          <Post key={node.slug}>
            <PostImage>
              <Img fluid={node.image.fluid}/>
            </PostImage>
            <PostText>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
            
              <p>{node.subtitle}</p>
  
              </PostText>
        
          </Post>
        )
      })} */}
      <PortfolioSection/>
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
