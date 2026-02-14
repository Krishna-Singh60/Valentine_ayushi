function createPetal(){
 let p=document.createElement("div");
 p.className="petal";
 p.style.left=Math.random()*100+"vw";
 p.style.animationDuration=5+Math.random()*5+"s";
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),9000);
}
setInterval(createPetal,700);