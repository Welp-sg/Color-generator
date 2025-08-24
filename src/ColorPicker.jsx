import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

 
  function handleColorChange(event) {
    setColor(event.target.value);
  }


  function copyToClipboard() {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  }

 
  function randomColor() {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(random);
  }

  return (
    <div className="color-picker-container">
      <h1> Color Picker</h1>

     
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>

      
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} />

     
      <div className="button-group">
        <button onClick={copyToClipboard}>Copy Color</button>
        <button onClick={randomColor}>Random Color</button>
      </div>
    </div>
  );
}

export default ColorPicker;
