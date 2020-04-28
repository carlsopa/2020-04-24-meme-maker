import React from "react";

const SvgCanvas = (props) => {
  var lnk = props.details.url;
  console.log("canvas");
  //console.log(props.Meme);
  const TextBoxArray = [];
  for (var i = 0; i < props.details.box_count; i++) {
    console.log("for");
    console.log(props.Meme[i]);
    TextBoxArray.push(
      <text key={i} id={"MemeBox" + i} y={`${(i + 1) * 10}px`} fontSize="16">
        
          {props.Meme[i]?document.getElementById("MemeBox"+i).textContent="good":null}
        
      </text>
    );
  }

  return (
    <div id="SvgCanvas">
      <svg contentEditable={true}>
        <image key={props.details.id} x="10" y="10" href={lnk} />
        {TextBoxArray}
      </svg>
    </div>
  );
};
export default SvgCanvas;
