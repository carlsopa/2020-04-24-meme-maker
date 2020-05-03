import React, { useState} from "react";
import ReactDom from 'react-dom';
import SvgControls from "./components/svgcontrols";
import SvgCanvas from "./components/svgcanvas";
import MemeChooser from "./components/selector";
import SvgOutput from "./components/output";
import "./style/meme.css";

function App() {


  const [Meme, setMeme] = useState([]);
  const [MemeText, setMemeText] = useState([]);
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
        <SvgControls getter={MemeText} setter={TextSet} details={Meme} Create={document.getElementsByName(SvgCanvas)} />
        <MemeChooser click={MemeSet} />
        <SvgOutput/>
        
        {
          //console.log(document.querySelector('svg'))
        }

        
      </div>
    </div>
  );
}

export default App;
