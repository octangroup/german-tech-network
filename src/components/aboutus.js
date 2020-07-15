
import PropTypes from "prop-types"
import React from "react"

const AboutUs = ({ siteTitle}) => (
  <div className="panel z-10 px-0 pt-32 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div class="py-4 w-50 mx-auto text-center">
		<h1 class="font-primary my-5 text-2xl tracking-wider">{siteTitle}</h1> 
    <div class="h-rem-1 w-rem-18 bg-accent mx-auto rounded-full"></div>
    <div class="w-100 px-2 my-10 tracking-wider leading-loose text-black-50 text-group">	
    <p>
      We are a platform that brings together tech-leaders from Rwanda and Germany and catalyzes the exchange of ideas and the initiation of joint projects between them. Our carrier is the German non-profit association Tech in Ruanda e.V..
  </p>
	</div>
	</div>
  
  </div>
)

AboutUs.propTypes = {
  siteTitle: PropTypes.string,
}

AboutUs.defaultProps = {
  siteTitle: ` German Rwandan Tech Network`,
}

export default AboutUs