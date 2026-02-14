const music=document.getElementById("bgMusic");
const toggle=document.getElementById("musicToggle");
if(toggle){toggle.onclick=()=>{music.muted=!music.muted;toggle.innerText=music.muted?"🔇":"🔊";};}
document.body.addEventListener("click",()=>{if(music&&music.paused)music.play();},{once:true});