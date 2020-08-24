import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false, scrolling: false }
  }

  navItemsIds() {
    console.log(this.props.menuList.link)
    return this.props.menuList.map(item => {
      let url = item.url
      url = url.replace("/", "")
      url = url.replace("#", "")
      return url
    })
  }

  render() {
    return (
      <nav className="z-9999 text-accent h-rem-32 w-100 hidden xl:block lg:block m-0 t-0">
        <div className="w-90 relative flex mx-auto py-10 mx-0">
        <div className="w-20 flex list my-auto mx-0 px-0 ">
            <div className="m-0 w-30 px-0 py-1">
              <Link to="/">
                <img src={"/img/logo.svg"}/>
              </Link>
            </div>
            <div className="logo-font text-sm w-70 py-2 text-primary">
            <Link to="/">
            <p >GERMAN RWANDAN TECH NETWORK</p>
            </Link>
            </div>
          </div>

          <ul className="list w-80 text-right px-0 mr-0  text-xl pt-2">
            
              {this.props.menuList.map(item => (
                <li
                  onClick={this.expandText}
                  className="text-black font-secondary inline-block mx-5 text-base  my-0 "
                >
                  {" "}
                  <div className="mx-0 nav-link-text w-100 h-100 block cursor-pointer"
                  >
                    {item.title}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    )
  }
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
  menuList: PropTypes.array,
}

Navbar.defaultProps = {
  siteTitle: `GERMAN RWANDAN TECH NETWORK`,
  menuList: [
    {
      url: "/#about",
      title: "About",
    },
    {
      url: "/#project",
      title: "Project",
    },
    {
      url: "/#members",
      title: "Members",
    },
    {
      url: "/#techinrwanda",
      title: "Tech in Ruanda e.V.",
    },
    {
      url: "/#contact",
      title: "Contact",
    },
  ],
}

export default Navbar
