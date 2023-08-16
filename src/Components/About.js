import React from "react";
import propTypes from "prop-types";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStlyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "2px solid red",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  let design = {
    color: props.mode ==="dark"?"white":"black",
    backgroundColor:props.mode ==="dark"?"#130e23":"white",
    border:props.mode==="dark"?"2px solid":"1px solid",
    borderColor:props.mode==="dark"?"#130e23":"white"

  }
  return (
    <div className="container my-5" style={design}>
      <h2 className=""> <b>{props.heading}</b> </h2>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne" style={design}>
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"

                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={design}
              >
               <strong> Analyze Your Text</strong>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={design}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={design}>
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={design}
              >
                <strong> Free to use</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={design}>
             Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header" id="headingThree" style={design}>
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={design}
              >
               <strong>Browser Compatible</strong> 
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={design}>
             This is word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/*<button className="btn btn-outline-success my-3" onClick={toggleStlyle}>
        {btntext}{" "}
  </button> */}
    </div>
  );
}
About.propTypes = {
  heading: propTypes.string.isRequired,
};
About.defaultProps = {
  heading: "About Us",
};
