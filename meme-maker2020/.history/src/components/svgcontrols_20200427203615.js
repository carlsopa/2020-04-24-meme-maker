import React, { useEffect,useState } from "react";
import FormComponent from "./controlcomponent";

const SvgControls = (props) => {
  var EditVariablesArray = [];
  var TextDetails = props.getter;
  var EditBoxArray = [];

  const EditorUpdate = (e) => {
    let newarr = {id:e.currentTarget.id,text:e.target.value};
    //console.log(props.getter[e.currentTarget.id].range);
    var Type = e.target.type;
    if (Type == "text") {
      EditVariablesArray[e.currentTarget.id].text = e.target.value;
      EditVariablesArray[e.currentTarget.id].range = props.getter[e.currentTarget.id].range;
      
    }
    if (Type == "range")  {
      EditVariablesArray[e.currentTarget.id].range = String(e.target.value);
      EditVariablesArray[e.currentTarget.id].text = props.getter[e.currentTarget.id].text;
    }
    props.setter(EditVariablesArray[e.currentTarget.id],true);
  };

  for (var i = 0; i < props.details.box_count; i++) {
    //push form elements to an array that will be rendered in the controls section.
    EditVariablesArray.push({ id: i, text: "meme text"+i, Color: "", range: 0 });
    EditBoxArray.push(
      <FormComponent
        key={i}
        count={i}
        change={EditorUpdate}
        values={props.getter[i]}
      />
    );
  }
  useEffect(() => {
    console.log("effect");
    props.setter(EditVariablesArray,false);
  }, [props.details]);

  return (
    <div id="SvgControls">
      <form>{EditBoxArray}</form>
    </div>
  );
};
export default SvgControls;
