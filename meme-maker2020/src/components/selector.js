import React, { useEffect, useState } from "react";
import Meme from './meme';

const MemeChooser = ({click}) => {
  
  const [MemeList, SetMemeList] = useState([]);
  function list(){
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => SetMemeList (response.data.memes))
    );
  }
  useEffect(() => {
    console.log("onload");
    list();
  }, []);
  

  return <div id="MemeChooser">{MemeList.map((key,index)=>
    <Meme image={key} second={click}/>
  )}
  </div>;
};
export default MemeChooser;
