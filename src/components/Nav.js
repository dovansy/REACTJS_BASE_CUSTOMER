import React from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import { ROUTER } from "@constants/Constant";
import { STRINGS } from "@constants/Strings";
import "../styles/footer.css";
import urlImage from "../assets/img_logo.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  render() {
    const pathName = window.location.pathname;
    console.log(pathName.search("/chi-tiet-don-hang"));
    return (
      <div>
        <div className="col-12">
          <nav className="navbar  navbar-expand-lg  p-0 logo row">
            <Link
              to={ROUTER.HOME}
              className="footer"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <img
                src={urlImage}
                alt="logo"
                className="pb-3 mr-5"
                style={{ height: "75px" }}
              />
            </Link>
            <div
              className="icon-menu col-2"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <div
                id="wrapper"
                onClick={() =>
                  this.setState({ isClicked: !this.state.isClicked })
                }
                className={
                  this.state.isClicked ? "float-right change" : "float-right "
                }
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>
            <div
              className="collapse slide navbar-collapse col-lg-10"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav ml-4 ">
                <li className="nav-item  mr-3">
                  <NavLink
                    to={ROUTER.HOME}
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      this.setState({ isClicked: false });
                    }}
                  >
                    {STRINGS.HOME}
                  </NavLink>
                </li>
                <li className="nav-item  mr-3">
                  <NavLink
                    to={ROUTER.INTRODUCE}
                    className="nav-link"
                    activeClassName="active"
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    {STRINGS.INTRODUCE}
                  </NavLink>
                </li>
                <li className="nav-item  mr-3 ">
                  <NavLink
                    to={ROUTER.SEARCHORDER}
                    className={
                      pathName.search("chi-tiet-don-hang") == 1
                        ? "nav-link active"
                        : "nav-link"
                    }
                    activeClassName="active"
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    {STRINGS.SEARCH}
                  </NavLink>
                </li>
                <li className="nav-item  mr-3 ">
                  <NavLink
                    to={ROUTER.PRICE_TABLE}
                    className="nav-link"
                    activeClassName="active"
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    {STRINGS.PRICETABLE}
                  </NavLink>
                </li>
                <li className="nav-item mr-3 border-bottom-0">
                  <NavLink
                    to={ROUTER.CONTACT}
                    className="nav-link"
                    activeClassName="active"
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    {STRINGS.CONTACT}
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
