import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"


const IndividualProject = ({ data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  return(
<div location={location} title={siteTitle}>
    {posts.map(({ node }) => {
      const title = node.title || node.slug
      return (
        <div key={node.slug}>

  <div className="panel z-10 px-0 pt-16 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div class="py-4 w-60 mx-auto text-center">
		<h1 class="heading-font my-5 text-5xl tracking-wider">
      <Link to={node.slug}>
    {title}
  </Link></h1> 
    <div class="h-rem-1 w-rem-18 bg-accent mx-auto rounded-full"></div>
    <div class="my-10 tracking-wider font-primary leading-loose text-xl">	
    <ul className="flex text-left font-primary">
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full mr-5 mt-3"></span>
      <li className="w-50 text-base my-0">{node.subtitle}</li>
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full ml-5 mt-3"></span>
      <li className="w-50 mx-5 text-base my-0">{node.subtitle}</li>
    </ul>

    <ul className="flex mt-5 text-left font-primary">
    <span className="w-rem-2 h-rem-2 bg-blue rounded-full mr-5 mt-3"></span>
      <li className="w-50  text-base my-0">{node.subtitle}</li>
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full ml-5 mt-3"></span>
      <li className="w-50 mx-5 text-base my-0">{node.subtitle}</li>
    </ul>
	</div>

  <div>
  <img src={"/img/DevelopersAtWork.png"} />
  </div>

  <div className="text-left font-primary font-bold">
  {node.content.childContentfulRichText.html}
  </div>
  <div className="text-left font-primary font-bold">
  {node.content.childContentfulRichText.html}
  </div>
  <div className="my-10">
      <h1 class="heading-font my-5 text-3xl tracking-wider">{siteTitle}</h1> 
       <div class="h-rem-1 w-rem-12 bg-accent mx-auto rounded-full"></div>
       <div className="text-left font-primary font-bold my-5">
       {node.content.childContentfulRichText.html}
  </div>
  </div>
       

  </div>
</div>

</div>

)

})}
</div> 
)
}



export default IndividualProject

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

        content {
          childContentfulRichText {
               html
           }
         }
        slug
       }
     }
   }
  }
`
