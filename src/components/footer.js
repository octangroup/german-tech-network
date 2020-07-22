import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle}) => (

 <div className =" w-90 mx-auto">
    <div className="w-100 py-3 font-primary cursor-pointer text-base text-primary ">
     <span className="mr-3">{siteTitle}</span> / 
     <Link>
     <a className="mx-3"> Imprint </a>
     </Link>
     
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `©2019, Tech in Ruanda e.V`,
}

export default Footer
