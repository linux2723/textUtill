import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    text.length > 0
      ? props.showAlert("converted to upperCase", "success")
      : props.showAlert("Enter some text first", "danger");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length > 0
      ? props.showAlert("converted to lowerCase", "success")
      : props.showAlert("Enter some text first", "danger");
  };
  const ClearText = () => {
    setText("");
    props.showAlert("All text cleared", "warning");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("Enter text here2");

  return (
    <>
      <div
        className="mb-3 mx-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "dark" }}
      >
        {/* <h1>{text}</h1> */}
        <label htmlFor="MyBox" className="form-label">
          <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {props.heading}
          </h1>
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="my-box"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here"
        ></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={ClearText}>
          Clear All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length}
        </p>
        <p>{0.008 * text.split("").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter something to Preview it here"}</p>
      </div>
    </>
  );
}
