import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
// import { Link } from "gatsby"
// import styled from "styled-components"
// import { Link } from "gatsby"


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
const Index = ({ data, location }) => {
  // console.log("hello")
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allContentfulPost.edges

  return (
   
    <Layout >
      <SEO title="All posts" />

        {/* {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <div key={node.slug}>
              <PostImage>
              { <Img fluid={node.image.fluid}/> }
            </PostImage>  
             <div>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
            
              <p>{node.subtitle}</p>
  
              </div> 
            
            
          </div>
        )
      })}    */}
      
    </Layout>
  
  
  )
}

export default Index

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
