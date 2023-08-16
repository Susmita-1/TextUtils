import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

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
  // const [btn,setBtn] = useState("Enable Light Mode")
  const removeClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
      }
  const toggleMode = (cls) => {
    removeClasses();
    // console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      // document.body.classList.add('bg-'+cls)
      setMode("dark");
      document.body.style.backgroundColor = "#130e23";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils -  DarkMode";
      // setMyStyle({
      //   color:"White",
      //   backgroundColor: "Black",
      //   border:"2px solid red"
      // })

      // setBtn("Enable Dark Mode")

      // setInterval( ()=>{
      //   document.title="TextUtils is Amazing Text Analyzer"
      // },3000 );

      // setInterval( ()=>{
      //   document.title="Download TextUtils Now"
      // },2000 );
    } else {
      // document.body.classList.add('bg-light')
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is Enabled", "success");
      document.title = "TextUtils -  LightMode";

      // setMyStyle({
      //   color:"Black",
      //   backgroundColor:"White",
       
      // })

      // setBtn("Enable Light Mode")
    }
  };
  // const greenMode = () => {
  //   if (mode === "light") {
  //     setMode("success");
  //     console.log("switch to green mode");
  //   } else {
  //     setMode("light");
  //     console.log("switch to light mode");
  //   }
  // };

  return (
    <>
      <Navbar
        title="textUtils"
        mode={mode}
        toggleMode={toggleMode} 
      />

      <Alert Alert={alert} />
      {/*  <TextForm
        heading="Enter The Text To Analyze Below"
        mode={mode}
        showAlert={showAlert}
      />
     <About heading="About Us" />
    <Route exact path="/about" element={<About heading="About Us" css={myStyle} />}>
    */}
  

  
    <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Try Texttutils - Word Counter,Character Counter, Remove Extra Spaces"
              mode={mode}
              showAlert={showAlert}
            />
          }
        >
          
        </Route>
       {/*<Route exact path="/about" element={<About heading="About Us" css={myStyle} />}></Route>*/}

        <Route exact path="/about" element={<About heading="About Us" mode={mode} />}>
          
        </Route>
      </Routes>

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
