import React, { useEffect } from "react";
import FormComponent from "./controlcomponent";

const SvgControls = (props) => {
  var EditVariablesArray = [];

  var EditBoxArray = [];
  const EditorUpdate = (e) => {
    console.log("hi")
    console.log(typeof(e.currentTarget.id));
    let newarr = [...EditVariablesArray];

    //   EditVariablesArray.map((item) =>
    //   //console.log(typeof(item.id))
    //     item.id === parseInt(e.currentTarget.id) ? console.log({...item}) : item
      
    // );

    // console.log(newarr);
    // newarr[e.currentTarget.id].text = e.target.value;
    // console.log(newarr);
    // //console.log(e.target.type)
    // props.setter(newarr);
    var Type = e.target.type;
    console.log(Type)
    if (Type = "text") {
      EditVariablesArray[e.currentTarget.id].text = e.target.value;
    }
    else  {
      EditVariablesArray[e.currentTarget.id].range = e.target.value;
    }
    props.setter(EditVariablesArray);
  };

  for (var i = 0; i < props.details.box_count; i++) {
    //push form elements to an array that will be rendered in the controls section.
        EditVariablesArray.push({ id: i, text: "meme text", Color: "", range: 0 });
EditBoxArray.push(
      <FormComponent key={i} count={i} change={EditorUpdate} values={props.getter[i]}/>
    );
  }
  useEffect(()=>{ console.log('effect'); props.setter(EditVariablesArray);
},[props.details])

  console.log(EditVariablesArray);

  return (
    <div id="SvgControls">
      <form>{EditBoxArray}</form>
    </div>
  );
};
export default SvgControls;
