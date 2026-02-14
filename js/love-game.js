const herName="AYUSHI";
const myName="KRISHNA";

const questions=[
"If I annoy you everyday... will you still stay? 😄",
"Will you fight with me but never leave me? ❤️",
"Can I be your safe place after every bad day? 🌙",
"Will you hug me even when I am wrong? 🥺",
"Will you grow old with me? 💍",
"So... will you be mine forever? 💖"
];

let i=0;
const q=document.getElementById("question");
const noBtn=document.getElementById("noBtn");

function moveNoButton(){
 const area=document.querySelector(".game-area");
 const x=Math.random()*(area.clientWidth-80);
 const y=Math.random()*(area.clientHeight-40);
 noBtn.style.left=x+"px";
 noBtn.style.top=y+"px";
}

noBtn.addEventListener("mouseenter",moveNoButton);
noBtn.addEventListener("touchstart",moveNoButton);

function yesClicked(){
 i++;
 if(i<questions.length){q.innerText=questions[i];}
 else{
  confettiBlast();

  document.body.innerHTML=`
  <div class='container vh-100 d-flex justify-content-center align-items-center text-center'>
    <div>
      <h1 class='display-4'>I Love You ❤️</h1>
      <h3 class='mt-3'>${myName} ❤️ ${herName}</h3>
      <p class='mt-4'>No distance can change what I feel for you</p>
      <p class='mt-2'>Wait... I want to tell you something</p>
    </div>
  </div>`;

    setTimeout(()=>{
      window.location.href = "letter.html";
   },2000);
 }
}

const noMessages=[
"Are you sure? 😅",
"Think again...",
"Still don't love me? 🥺",
"Heart says yes...",
"Last chance 😄"
];
let n=0;
noBtn.addEventListener('click',e=>{
 e.preventDefault();
 alert(noMessages[n%noMessages.length]);
 n++;
 moveNoButton();
});

setInterval(()=>{
 let h=document.createElement('div');
 h.className='heart';
 h.innerHTML='❤️';
 h.style.left=Math.random()*100+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),4000);
},300);
