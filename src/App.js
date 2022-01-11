import React, { useState } from "react";
import About from "./component/About";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Disable dark mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "You have a Virus";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      setbtnText("Enable Dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About"
          search="Search here"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="conatainer my-3">
          <Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the Text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
