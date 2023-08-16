import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  let design = {
    backgroundColor:props.mode==="dark"?"#000305":"white",
    color:props.mode==="dark"?"white":"black"
  }
  // <nav
  //       className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
  //     >
  return (
    <>
   
      <nav
        className="navbar navbar-expand-lg" style={design}
      >
        <Link className="navbar-brand" to="/" style={{color:(props.mode==="dark"?"white":"black")}}>
          {props.title}
       </Link> 
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
              <Link className="nav-link" to="/" style={{color:(props.mode==="dark"?"white":"black")}}>
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:(props.mode==="dark"?"white":"black")}}>
                {props.about}
              </Link>
            </li> 
          </ul>
          <div className="d-flex">
          <div className="bg-primary rounded mx-1" onClick={()=>props.toggleMode('primary')} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-1" onClick={()=>props.toggleMode('danger')} style={{height:'20px', cursor:'pointer', width:'20px'}}></div>
          <div className="bg-warning rounded mx-1" onClick={()=>props.toggleMode('warning')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-1" onClick={()=>props.toggleMode('success')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
        
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1" 
              onClick={()=>props.toggleMode(null)}
            />
            <label
              className={`custom-control-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="customSwitch1" 
            >
            ToggleMode
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
