
import PropTypes from "prop-types"
import React from "react"

const AboutUs = ({ siteTitle}) => (
  <div className="panel z-10 px-0 pt-32 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div class="py-4 w-80 mx-auto text-center">
		<h1 class="font-primary my-5 text-2xl">{siteTitle}</h1> 
    <div class="h-rem-1 w-rem-18 bg-accent mx-auto rounded-full"></div>
    <div class="w-100 px-2 my-10 text-black-50 text-group">
		
<p>Tech in Ruanda e.V. is a German non-profit association dedicated to promoting the Rwandan tech-industry by</p>



<ul><li>facilitating capacity building initiatives</li><li>supporting job creation projects in the IT-sector</li><li>informing the German public in general and the German tech-scene in particular about developments in the Rwandan IT-ecosystem</li></ul>



<p>To read more about our capacity building and job creation projects, please refer to the page of the&nbsp;<a href="https://techinruanda.de/category/german-rwandan-tech-network/">German Rwandan Tech Network</a>. We initiated the German Rwandan Tech Network as a way to bring together the partners with whom we implement our projects and to offer a decentralized platform for tech-leaders from Rwanda and Germany to connect and develop cooperation initiatives of their own.</p>



<p>To further our aim of informing the German public about the Rwandan IT-ecosystem we are currently developing a section of this website that will provide an overview of the main companies and initiatives of the Rwandan tech-scene. Furthermore, we are supporting a series of talks and presentations as well as media-articles about the Rwandan IT-ecosystem.</p>
	</div>
	</div>
  
  </div>
)

AboutUs.propTypes = {
  siteTitle: PropTypes.string,
}

AboutUs.defaultProps = {
  siteTitle: `About Tech in Ruanda e.V.`,
}

export default AboutUs