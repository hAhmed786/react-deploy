import React, { useState } from "react";

export default function (props) {
  const handleUpclick = () => {
    // console.log("Upper case is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handlelwclick = () => {
    // console.log("Upper case is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleclear = () => {
    // console.log("Upper case is clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear", "success");
  };
  const handlesentence = () => {
    let x = text.split(".").length - 1;
    setSen(x);
    props.showAlert("Sentences calculated and shown below", "success");
  };
  const [text, setText] = useState("");
  const [sen, setSen] = useState("0");

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "#382f72" }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "dark" ? "white" : "#382f72",
          }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handlelwclick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handlesentence}>
        Check Sentences
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#382f72" }}
      >
        <h1>Your text summary</h1>

        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes need to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        <p>Total Sentences: {sen}</p>
      </div>
    </>
  );
}
