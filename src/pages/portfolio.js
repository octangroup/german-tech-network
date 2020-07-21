import React from "react"
import { Link } from "gatsby"
import ProjectCard from "../cards/project"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PortfolioSection extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <div class="w-100 relative py-16">
          <div className="w-85 mx-auto text-center relative">
            <h1 class="font-primary text-9xl">Discover our projects</h1>
            <p class="txet-2xl secondary-font">
            The German Rwandan Tech Network is a platform that brings together tech-leaders from Rwanda 
            and Germany.
            </p>

     </div>
     <div className="flex flex-wrap justify-center w-95 ml-auto ">
          {this.props.portfolioSection.map((item, index) => (
            <ProjectCard key={index} details={item} />
          ))}
        </div>
   </div>
   </SectionWrapper>
   )
 }
}

PortfolioSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  values: PropTypes.array,
}

PortfolioSection.defaultProps = {
  id: null,
  title: ``,
  description: ``,
  values: [],
}

export default PortfolioSection
