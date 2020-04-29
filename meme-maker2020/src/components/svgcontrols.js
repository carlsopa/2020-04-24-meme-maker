import React, { useEffect } from "react";
import FormComponent from "./controlcomponent";

const SvgControls = (props) => {
  var EditVariablesArray = [];
  var EditBoxArray = [];

  const EditorUpdate = (event, ChangeType) => {
    //let newarr = {id:e.currentTarget.id,text:e.target.value};
    //console.log(props.getter[e.currentTarget.id].range);
    var Type = event.target.type;
    if (ChangeType === "change") {
      if (Type === "text") {
        EditVariablesArray[event.currentTarget.id].text = event.target.value;
        EditVariablesArray[event.currentTarget.id].range =
          props.getter[event.currentTarget.id].range;
        EditVariablesArray[event.currentTarget.id].color =
          props.getter[event.currentTarget.id].color;
      }
      if (Type === "range") {
        EditVariablesArray[event.currentTarget.id].range = String(
          event.target.value
        );
        EditVariablesArray[event.currentTarget.id].text =
          props.getter[event.currentTarget.id].text;
        EditVariablesArray[event.currentTarget.id].color =
          props.getter[event.currentTarget.id].color;
      }
      props.setter(EditVariablesArray[event.currentTarget.id], true);
    }
    if (ChangeType === "click") {
      const ElementId = event.target.parentElement.parentElement.id;
      EditVariablesArray[ElementId].color = event.target.id;
      EditVariablesArray[ElementId].range = props.getter[ElementId].range;
      EditVariablesArray[ElementId].text = props.getter[ElementId].text;
      props.setter(EditVariablesArray[ElementId], true);
    }
  };

  for (var i = 0; i < props.details.box_count; i++) {
    //push form elements to an array that will be rendered in the controls section.
    EditVariablesArray.push({
      id: i,
      text: "meme text" + i,
      Color: "black",
      range: 0,
    });
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
    props.setter(EditVariablesArray, false);
  }, [props.details]);

  return (
    <div id="SvgControls">
      <form>{EditBoxArray}</form>
    </div>
  );
};
export default SvgControls;
