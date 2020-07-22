
import PropTypes from "prop-types"
import React from "react"


class ProjectCard extends React.Component {
  render() {
    return (
      <div className="">

      <div className="w-40  bg-white">
        <div className="w-95 h-rem-74 bg-red overflow-hidden">

        <img src={"/img/WeCodeTraining_MurahoTechnologies-1536x1020.jpg"} className="w-100 h-100 overflow-hidden" />
        </div>
        <div class="w-65">
          <h3 class="p-0 m-0">Code+Design Camps</h3>
          <p class="p-0 m-0">The Code+Design Camp is an educational 
              methodology that aims...</p>
        </div>

     </div>

      </div>
    )
  }
}

ProjectCard.propTypes = {
  details: PropTypes.object,
}

ProjectCard.defaultProps = {
  details: {
    translations: [],
  },
}
export default ProjectCard