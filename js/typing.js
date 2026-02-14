const textLines=[
"Hey... ❤️",
"I know you opened this smiling 😊",
"But I made this because I miss you...",
"Distance is annoying na?",
"Still... you stayed.",
"And that means everything to me.",
"So today I want some minutes of your heart...",
"Just for us 💕"
];
let i=0,j=0,el=document.getElementById("typingText");
function type(){
 if(i<textLines.length){
  if(j<textLines[i].length){el.innerHTML+=textLines[i][j++];setTimeout(type,50);}
  else{el.innerHTML+="<br>";i++;j=0;setTimeout(type,700);} }
}
type();