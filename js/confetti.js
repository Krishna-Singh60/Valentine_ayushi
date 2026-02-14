function confettiBlast(){
 for(let i=0;i<120;i++){
  let c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*window.innerWidth+"px";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),3000);
 }
}