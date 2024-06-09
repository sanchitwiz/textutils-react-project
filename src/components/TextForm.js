import React, { useState } from "react";

export default function TextForm(props) {

  
  const [text, setText] = useState("Enter Your Text Here");

  const upClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };

  const lowClicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const inverseCase = () => {
    let chars = text.split("");
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === chars[i].toLowerCase()) {
        chars[i] = chars[i].toUpperCase();
      } else {
        chars[i] = chars[i].toLowerCase();
      }
    }
    const newText = chars.join('');
    setText(newText);
    props.showAlert("Converted to InnverseCase", "success")
  };

  const alternateCase = () => {
    let chars = text.split('');
    for (let i = 0; i < chars.length; i++) {
      if (i % 2 === 0) {
        chars[i] = chars[i].toLowerCase();
      } else {
        chars[i] = chars[i].toUpperCase();
      }
    }
    const newText = chars.join('');
    setText(newText);
    props.showAlert("Converted to InverseCase", "success")
  };

  const copyText = () => {
    let text = document.getElementById('myBox');
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges(), -------------> to de-select the selected text
    props.showAlert("Text Copied to Clipboard", "success")
  };

  return (
    <>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={upClicked} style={props.buttonStyle}>
          UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowClicked} style={props.buttonStyle}>
          Lower Case
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={inverseCase} style={props.buttonStyle}>
          Inverse Case
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={alternateCase} style={props.buttonStyle}>
          Alternate Case
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText} style={props.buttonStyle}>
          Copy Text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText} style={props.buttonStyle}>
          Clear Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Your Text Summary!</h2>
        <p>
          <b>
            Your text has {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
          </b>
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
