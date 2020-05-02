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
      <svg>
        <image key={props.details.id} x="10" y="10" href={lnk} />
        {console.log(TextBoxArray)}
        {TextBoxArray}
      </svg>
    </div>
  );
};
export default SvgCanvas;
