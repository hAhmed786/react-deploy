import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

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

  const togleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#382f72";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} togleMode={togleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route
              path="/"
              element={ */}
        <Form
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
