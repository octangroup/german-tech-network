import React from "react"
// import { graphql } from "gatsby"
import ProjectCard from "../components/cards/project"
import PropTypes from "prop-types"

// import SEO from "../components/seo"
import Img from "gatsby-image"
// import styled from "styled-components"



class PortfolioSection extends React.Component {
  render() {
    return (
        <div class="w-100 relative py-16">
          <div className="w-95 mx-auto text-center relative pt-5">
            <h1 class="heading-font font-black text-black my-8 text-7xl tracking-wider">Discover our projects</h1>
            <div class="border-1 border-solid border-accent w-rem-12 bg-accent mx-auto"></div>
            <p class="text-xl  font-secondary py-5">
            The German Rwandan Tech Network is a platform that brings together tech-leaders from Rwanda 
            and Germany.
            </p>
            <div className="flex flex-wrap justify-center w-100 h-px-700 py-12 mx-auto ">
        
            {/* <ProjectCard>
            <div className="w-95 h-rem-74 overflow-hidden">
                 <img src={"/img/WeCodeTraining_MurahoTechnologies-1536x1020.jpg"} className="w-100 h-100 " />
                 </div>
            </ProjectCard> */}


<div className="w-40 bg-white">
        <div className="w-100 h-rem-74 overflow-hidden">

        <img src={"/img/WeCodeTraining_MurahoTechnologies-1536x1020.jpg"} className="w-100 h-100 overflow-hidden" />
        </div>
        <div class="w-65 text-left">
        <h3 class="pt-2 m-0 font-primary text-xl font-bold py-2">Code+Design Camps</h3>
          <p class="py-0 font-secondary m-0">The Code+Design Camp is an educational 
              methodology that aims...</p>
        </div>

     </div>
<div class="w-10"></div>
     <div className="w-40 mt-24  bg-white">
        <div className="w-100 h-rem-74 overflow-hidden">

        <img src={"/img/MentoringConversation-1536x1152.jpg"} className="w-100 h-100 overflow-hidden" />
        </div>
        <div class="w-65 text-left">
          <h3 class="pt-2 m-0 font-primary text-xl font-bold py-2">Code+Design Camps</h3>
          <p class="py-0 font-secondary m-0">The Code+Design Camp is an educational 
              methodology that aims...</p>
        </div>

     </div>


<div className="w-40 bg-white">
        <div className="w-100 h-rem-74 overflow-hidden">

        <img src={"/img/DevelopersAtWork.png"} className="w-100 h-100 overflow-hidden" />
        </div>
        <div class="w-65 text-left">
        <h3 class="pt-2 m-0 font-primary text-xl font-bold py-2">Code+Design Camps</h3>
          <p class="py-0 font-secondary m-0">The Code+Design Camp is an educational 
              methodology that aims...</p>
        </div>

     </div>
<div class="w-10"></div>
     <div className="w-40 mt-24  bg-white">
        <div className="w-100 h-rem-74 overflow-hidden">

        <img src={"/img/FirstCodeDesignCamp-1536x1152.jpg"} className="w-100 h-100 overflow-hidden" />
        </div>
        <div class="w-65 text-left">
          <h3 class="pt-2 m-0 font-primary text-xl font-bold py-2">Code+Design Camps</h3>
          <p class="py-0 font-secondary m-0">The Code+Design Camp is an educational 
              methodology that aims...</p>
        </div>

     </div>


          
        </div>

     </div>
   </div>
    )
  }
}

PortfolioSection.propTypes = {
  siteTitle: PropTypes.string,
}

PortfolioSection.defaultProps = {
  siteTitle: ` Discover our projects `,
}

export default PortfolioSection
