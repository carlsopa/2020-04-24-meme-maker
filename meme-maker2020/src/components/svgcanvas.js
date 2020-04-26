import React from "react";

const SvgCanvas = (props) => {
  var lnk = props.details.url;
  const TextBoxArray = []
  for(var i=0; i<props.details.box_count; i++ ){
    TextBoxArray.push(<text key={i} id={"MemeBox"+i} y={`${(i + 1) * 10}px`} fontSize="16">
    Enter Text Here
  </text>)
  }
  
  return (
    <div id='SvgCanvas'>
      <svg contentEditable={true}>
        <image key={props.details.id} x="10" y="10" href={lnk} />
        {TextBoxArray}
      </svg>
    </div>
  );
};
export default SvgCanvas;
