import React,{useState} from 'react';
import SvgControls from './components/svgcontrols';
import SvgCanvas from './components/svgcanvas';
import MemeChooser from './components/selector';
import './style/meme.css'
import './App.css';


function App() {
  const [Meme, setMeme] = useState([]);

  const [MemeText, setMemeText]=useState([]);
  const [MemeColor, setMemeColor] = useState([]);
  const MemeSet=(e)=>{
    setMeme(e);
  }
  const TextSet=(e)=>{
    setMemeText(e)
  }

  return (
    <div className="App">
      <header>
        Meme Maker
      </header>
      <div id="MemeMaker">
        <SvgCanvas Meme={MemeText} details={Meme}/>
        <SvgControls setter={TextSet} details={Meme}/>
        <MemeChooser click={MemeSet}/>
      </div>
    </div>
  );
}

export default App;