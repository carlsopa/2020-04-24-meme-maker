import React, { useEffect } from "react";
import FormComponent from "./controlcomponent";

const SvgControls = (props) => {
  var EditVariablesArray = [];
  var EditBoxArray = [];

  const EditorUpdate = (event, ChangeType) => {
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
  const CreateCanvas = (event,Svg)=>{
    const svg = document.querySelector('svg');
    const img = document.createElement('img');
    img.style.width = svg.style.width;
    img.style.height = svg.style.height;

    const canvas = document.querySelector('canvas');
    console.log(img);
    //const xml = new XMLSerializer().serializeToString(svg);
    const xml = svg.outerHTML;
    console.log(xml);
    const svg64 = window.btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;
    img.src = image64;
    console.log(canvas);
    canvas.getContext('2d').drawImage(img,0,0);
    var dt = canvas.toDataURL('image/png'); // << this fails in IE/Edge...
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  // console.log(dt);
  // console.log(event.currentTarget.href);
  event.currentTarget.href = dt;


    
  }

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
      <form>{EditBoxArray}
      <a onClick={(event)=>CreateCanvas(event,props.Create)} download="canvas.png" href="#">Click This!</a></form>
    </div>
  );
};
export default SvgControls;
