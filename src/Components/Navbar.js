import React from "react";
import propTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
       { /* <Link className="navbar-brand" to="/">
          {props.title}
       </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.Home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
              </li>
              
             {/*<li className="nav-item"> 
              <Link className="nav-link" to="/">
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li> */}
          </ul>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label
              className={`custom-control-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="customSwitch1" 
            >
            Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,

  sushmita: propTypes.string,
  aboutTextutils: propTypes.string,
};
// default set props
Navbar.defaultProps = {
  title: "TextUtils",
  Home: "Home",
  about: "About",
};
