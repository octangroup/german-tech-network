
import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"




const AboutUs = ({ data,location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  
  return (
    <div location={location} title={siteTitle}>
      <Layout/>
    {posts.map(({ node }) => {
    const title = node.title || node.slug
    return (
  <div className="panel z-10 px-0 pt-48 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div key={node.slug}>
    <div class="py-4 w-60 mx-auto text-center">
		<h1 class="heading-font my-5 text-5xl tracking-wider">
      <Link to={node.slug}>
        {title}
      </Link>
    </h1> 
    <div class="h-rem-1 w-rem-18 bg-accent mx-auto rounded-full"></div>
    <div class="w-100 px-2 my-10 tracking-wider font-primary leading-loose text-black-50 text-group text-xl">	
    <p> {node.subtitle}</p>
	</div>
	</div>
  </div>
  </div>
    )
   })}
   </div>
   )
  }



export default AboutUs

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
