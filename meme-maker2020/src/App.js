import React, { useState } from "react";
import SvgControls from "./components/svgcontrols";
import SvgCanvas from "./components/svgcanvas";
import MemeChooser from "./components/selector";
import "./style/meme.css";

function App() {
  const [Meme, setMeme] = useState([]);

  const [MemeText, setMemeText] = useState([]);
  const [MemeColor, setMemeColor] = useState([]);
  const MemeSet = (e) => {
    setMeme(e);
  };
  const TextSet = (MemeEditArray, InitialArraySetFlag) => {
    if (!InitialArraySetFlag) {
      setMemeText(MemeEditArray);
    }
    if (InitialArraySetFlag) {
      var MemeEditArrayCopy = [...MemeText];
      MemeEditArrayCopy[MemeEditArray["id"]] = MemeEditArray;
      setMemeText(MemeEditArrayCopy);
    }
  };
  return (
    <div className="App">
      <header>Meme Maker</header>
      <div id="MemeMaker">
        <SvgCanvas Meme={MemeText} details={Meme} />
        <SvgControls getter={MemeText} setter={TextSet} details={Meme} />
        <MemeChooser click={MemeSet} />
      </div>
    </div>
  );
}

export default App;
