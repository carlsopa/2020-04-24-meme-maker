const TopInput = document.getElementById('TopText');
const BottomInput = document.getElementById('BottomText')
const MemeTop = document.getElementById('MemeTop');
const MemeBottom = document.getElementById("MemeBottom");

const ImageButton = document.getElementById("ImageConvert");

const svg = document.querySelector('svg');
const img = document.querySelector('img');
const canvas = document.querySelector('canvas');
console.log(svg);

document.getElementById('TopColorPicker').addEventListener("click",(e)=>{
    MemeTop.style.fill=e.target.id;
})
document.getElementById('BottomColorPicker').addEventListener("click",(e)=>{
    MemeBottom.style.fill=e.target.id;
});

TopInput.addEventListener("change",(e)=>{
    MemeTop.textContent=e.target.value;
});
BottomInput.addEventListener("change",(e)=>{
    MemeBottom.textContent=e.target.value;
})


ImageButton.addEventListener("click",()=>{
  const xml = (new XMLSerializer()).serializeToString(svg);
const svg64 = btoa(xml);
const b64Start = 'data:image/svg+xml;base64,';  
const image64 = b64Start + svg64;
  img.src = image64;  
})


canvas.getContext('2d').drawImage(img,0,0);

const dlCanvas=()=>{
    console.log('download')
    var dt = canvas.toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  this.href = dt;
}
document.getElementById('DownloadLink').addEventListener("click",dlCanvas,false);