const msg=document.getElementById("magicMessage");
document.querySelectorAll(".magic-card").forEach(card=>{
 card.addEventListener("click",()=>{
   msg.textContent=card.dataset.text;
   msg.animate([{transform:"scale(.96)",opacity:.35},{transform:"scale(1)",opacity:1}],{duration:350});
 });
});
addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-innerHeight;
 document.querySelector(".top-progress").style.width=(scrollY/max*100)+"%";
});
