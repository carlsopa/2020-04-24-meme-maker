import React from 'react';

const Meme = (props)=>{
return(
    <div id="thumb">
        <img src={props.image.url} onClick={(e)=>props.second(props.image)}/>
    </div>
)
}
export default Meme;