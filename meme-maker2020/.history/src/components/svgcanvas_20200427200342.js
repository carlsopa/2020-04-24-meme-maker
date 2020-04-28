import React from "react";

const SvgCanvas = (props) => {
  var lnk = props.details.url;
  console.log("canvas")
  //console.log(props.Meme);
  const TextBoxArray = [];
  for (var i = 0; i < props.details.box_count; i++) {
    console.log(props.Meme[i].id)
    TextBoxArray.push(
      <text key={i} id={"MemeBox" + i} y={`${(i + 1) * 10}px`} fontSize="16">
        {//document.getElementById("MemeBox" + i).textContent=props.Meme[i].text
        }
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
