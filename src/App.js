import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#130e23";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils -  DarkMode";
      // setInterval( ()=>{
      //   document.title="TextUtils is Amazing Text Analyzer"
      // },3000 );

      // setInterval( ()=>{
      //   document.title="Download TextUtils Now"
      // },2000 );
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is Enabled", "success");
      document.title = "TextUtils -  LightMode";
    }
  };
  const greenMode = () => {
    if (mode === "light") {
      setMode("success");
      console.log("switch to green mode");
    } else {
      setMode("light");
      console.log("switch to light mode");
    }
  };

  return (
    <>
     
      <Navbar
          title="textUtils"
          mode={mode}
          toggleMode={toggleMode}
          greenMode={greenMode}
        />

        <Alert Alert={alert} />
        <TextForm
          heading="Enter The Text To Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
       { /* <About heading="About Us" /> */}

        {/*<Routes>
        <Route exact path="/" element={ <TextForm
          heading="Enter The Text To Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />}> </Route>

        <Route exact path ="/about" element={<About heading="About Us" />}> </Route>
        
        </Routes>*/}

  
        {/* <Navbar title="textUtils"  aboutTextutils="About Textutils" sushmita="Home"/> */}

        {/*<div className="container my-3">
        <TextForm
          heading="Enter The Text To Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      <div className="container my-3">
        <About heading="About Us" />
      </div>*/}
     
    </>
  );
}
export default App;
