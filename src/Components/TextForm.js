import React, { useState } from "react";
import propsTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  

  const handleUpclick = () => {
    console.log("UpperCase was clicked" + text);

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase is enabled", "success");
    document.title="TextUtils-Uppercase";
  };

  const handleLocase = () => {
    console.log("UpperCase was clicked" + text);
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("Lowercase is Enabled", "success");
    document.title="TextUtils-Lowercase";
  };

  const handleClearClick = () => {
    console.log("Text has been clear" + text);
    let clear = "";
    setText(clear);
    props.showAlert("Text has been clear", "success");
    document.title="TextUtils-ClearText";
  };

  const copyClipboard = () => {
    console.log("copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "success");
    document.title="TextUtils-CopiedText";
  };
  // using js regex, method.
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
    document.title="TextUtils-ExtraSpaces";
  };
  
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 mt-3 " onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 mt-3" onClick={handleLocase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1 mt-3" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1 mt-3" onClick={copyClipboard}>
          Copy to clipboard
        </button>

        <button
          className="btn btn-primary mx-1 mt-3"
          onClick={handleExtraSpaces}
        >
          Remove Extraspaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <p> {text.length} Characters Length.</p>
        <p> {text.split(" ").length} Words Total.</p>
        <p> {0.008 * text.split(" ").length} Minutes to Read.</p>
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter the something in the above text box to preview it here!!"}
        </p>
      </div>
    </>
  );
}

TextForm.propsTypes = {
  heading: propsTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter The Text To Analyze Below",
};
