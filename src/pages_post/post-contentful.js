import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const postExercise = ({ data, pageContext, location }) => {
  const post = data.ContentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.subtitle}/>
      <Img fluid={post.image.fluid}/>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <hr/>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default postExercise

export const pageQuery = graphql`
  query ContentfulPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: { eq: $slug }) {
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
    }
  }
`
