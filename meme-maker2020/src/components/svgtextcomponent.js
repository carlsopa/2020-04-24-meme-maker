import React, { useState } from "react";

const TextComponent = (props) => {
  const [Dragging, setDragging] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [coordinates, setCoordinates] = useState({ x: 20, y: 20 });

  const DragClick = (e) => {
    console.log(e.target.attributes);
    e.preventDefault();
    setDragging(true);
    setOrigin({ x: e.clientX, y: e.clientY });
  };
  const DragMove = (e) => {
    e.preventDefault();
    var startX = coordinates.x;
    var startY = coordinates.y;
    if (Dragging) {
      setCoordinates({
        x: startX + e.clientX - origin.x,
        y: startY + e.clientY - origin.y,
      });
    }
  };
  const DragRelease = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const DragOut = (e) => {
    setDragging(false);
  };

  return (
    <text
      key={props.id}
      id={"MemeBox" + props.id}
      y={`${coordinates.y}`}
      x={`${coordinates.x}`}
      fontSize={props.Meme.range}
      fill={props.Meme.color}
      onMouseDown={(e) => DragClick(e)}
      onMouseMove={(e) => DragMove(e)}
      onMouseUp={(e) => DragRelease(e)}
      onMouseOut={(e) => DragOut(e)}
    >
      {document.getElementById("MemeBox" + props.id)
        ? (document.getElementById("MemeBox" + props.id).textContent =
            props.Meme.text)
        : null}
    </text>
  );
};
export default TextComponent;
