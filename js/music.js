const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

// Restore state when page changes
if(localStorage.getItem("musicTime")){
    music.currentTime = localStorage.getItem("musicTime");
}

// Play on first interaction (works like autoplay)
function startMusic(){
    music.volume = 0.7;
    music.play().catch(()=>{});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// Save progress when navigating pages
setInterval(()=>{
    if(!music.paused)
        localStorage.setItem("musicTime", music.currentTime);
},1000);

// Toggle button
toggle.onclick = ()=>{
    if(music.paused){
        music.play();
        toggle.innerText="🔊";
    }else{
        music.pause();
        toggle.innerText="🔇";
    }
};
