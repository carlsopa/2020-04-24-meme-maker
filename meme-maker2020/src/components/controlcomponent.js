import React, { useState } from "react";

const FormComponent = (props) => {
  const [Text, setText] = useState("");
  if (props.values) {
    console.log(props.values);
  }

  return (
    <div id={props.count} onChange={(e) => props.change(e)}>
      <input
        type="text"
        id={"MemeText" + props.count}
        value={props.values ? props.values.text : null}
      />
      <span>choose a color:</span>
      <div id="TopColorPicker">
        <div id="black" className="TopColor"></div>
        <div id="white" className="TopColor"></div>
        <div id="yellow" className="TopColor"></div>
        <div id="green" className="TopColor"></div>
        <div id="blue" className="TopColor"></div>
        <div id="purple" className="TopColor"></div>
      </div>

      <input
        type="range"
        id={"MemeTextSize" + props.count}
        name={"MemeTextSize" + props.count}
        value={props.values ? props.values.range : null}
        min="8"
        max="32"
      />
    </div>
  );
};
export default FormComponent;
