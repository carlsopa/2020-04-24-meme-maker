import React from "react";

const FormComponent = (props) => {
  console.log(props.values);
  const Objects = () =>{

  }
  return (
    <div id={props.count} onChange={(e) => props.change(e)}>
      
      <input type="text" id={"MemeText" + props.count}  />
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
        min="8"
        max="32"
      />
    </div>
  );
};
export default FormComponent;
