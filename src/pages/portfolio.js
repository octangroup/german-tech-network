import React from "react"
import { graphql } from "gatsby"
import ProjectCard from "../cards/project"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import styled from "styled-components"



const PortfolioSection = () => (
    <Layout>
        <div class="w-100 relative py-16">
          <div className="w-85 mx-auto text-center relative">
            <h1 class="font-primary text-9xl">Discover our projects</h1>
            <p class="text-2xl secondary-font">
            The German Rwandan Tech Network is a platform that brings together tech-leaders from Rwanda 
            and Germany.
            </p>

            <div className="flex  flex-wrap justify-center w-95 ml-auto ">
          {this.props.portfolio.map((item, index) => (
            <ProjectCard key={index} details={item} />
          ))}
        </div>

     </div>
   </div>
   </Layout>
)
export default PortfolioSection
