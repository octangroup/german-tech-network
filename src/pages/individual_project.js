import PropTypes from "prop-types"
import React from "react"

const IndividualProject = ({ siteTitle}) => (
  <div className="panel z-10 px-0 pt-16 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div class="py-4 w-60 mx-auto text-center">
		<h1 class="heading-font my-5 text-5xl tracking-wider">{siteTitle}</h1> 
    <div class="h-rem-1 w-rem-18 bg-accent mx-auto rounded-full"></div>
    <div class="my-10 tracking-wider font-primary leading-loose text-xl">	
    <ul className="flex text-left font-primary">
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full mr-5 mt-3"></span>
      <li className="w-50 text-base my-0">The German Rwandan Tech Network is a platform that brings together tech-leaders</li>
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full ml-5 mt-3"></span>
      <li className="w-50 mx-5 text-base my-0">The German Rwandan Tech Network is a platform that brings together tech-leaders</li>
    </ul>

    <ul className="flex mt-5 text-left font-primary mr-5">
    <span className="w-rem-2 h-rem-2 bg-blue rounded-full mr-5 mt-3"></span>
      <li className="w-50  text-base my-0">The German Rwandan Tech Network is a platform that brings together tech-leaders</li>
      <span className="w-rem-2 h-rem-2 bg-blue rounded-full ml-5 mt-3"></span>
      <li className="w-50 mx-5 text-base my-0">The German Rwandan Tech Network is a platform that brings together tech-leaders</li>
    </ul>
	</div>

  <div>
  <img src={"/img/DevelopersAtWork.png"} />
  </div>

  <div className="text-left font-primary font-bold">
    <p>Code+Design Camp is an educational methodology that aims at getting 
      participants withlittle or no prior programming experience interested in coding.Bringing the Code+Design Camp methodology to Rwanda has beenan initiative by German Rwandan Tech
      Network founding member Franziska Knauer as well as a team of facilitators from Code University Berlin and the Code+Design Camp association in cooperation with the Digital Transformation Center in Kigali.</p>
  </div>
  <div className="text-left font-primary font-bold">
    <p>Code+Design Camp is an educational methodology that aims at getting 
      participants withlittle or no prior programming experience interested in coding.Bringing the Code+Design Camp methodology to Rwanda has beenan initiative by German Rwandan Tech
      Network founding member Franziska Knauer as well as a team of facilitators from Code University Berlin and the Code+Design Camp association in cooperation with the Digital Transformation Center in Kigali.</p>
  </div>
  <div className="my-10">
      <h1 class="heading-font my-5 text-3xl tracking-wider">{siteTitle}</h1> 
       <div class="h-rem-1 w-rem-12 bg-accent mx-auto rounded-full"></div>
       <div className="text-left font-primary font-bold my-5">
       <p>Code+Design Camp is an educational methodology that aims at getting 
      participants withlittle or no prior programming experience interested in coding.Bringing the Code+Design Camp methodology to Rwanda has beenan initiative by German Rwandan Tech
      Network founding member Franziska Knauer as well as a team of facilitators from Code University Berlin and the Code+Design Camp association in cooperation with the Digital Transformation Center in Kigali.</p>
  </div>
  </div>
       

  </div>
</div>
)

IndividualProject.propTypes = {
  siteTitle: PropTypes.string,
}

IndividualProject.defaultProps = {
  siteTitle: ` Code+Design Camps`,
}

export default IndividualProject