import React from "react";
import TextComponent from "./svgtextcomponent";

const SvgCanvas = (props) => {
  var lnk = props.details.url;
  const TextBoxArray = [];
  for (var i = 0; i < props.details.box_count; i++) {
    if (props.Meme[i]) {
      TextBoxArray.push(<TextComponent Meme={props.Meme[i]} id={i} />);
    }
  }

  return (
    <div id="SvgCanvas">
      <svg xmlns='http://www.w3.org/2000/svg'>
        <image key={props.details.id} href={lnk} />
        {console.log(TextBoxArray)}
        {TextBoxArray}
      </svg>
    </div>
  );
};
export default SvgCanvas;
