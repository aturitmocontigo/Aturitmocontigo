const cards=document.querySelectorAll(".discover-card"),message=document.querySelector("#message");
cards.forEach(card=>card.addEventListener("click",()=>{message.textContent=card.dataset.message;message.animate([{transform:"scale(.98)",opacity:.4},{transform:"scale(1)",opacity:1}],{duration:350})}));
addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;document.querySelector(".scrollbar").style.width=(scrollY/h*100)+"%"});
document.addEventListener("mousemove",e=>{if(innerWidth>900){const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*8;document.querySelector(".playground").style.transform=`translate(${x}px,${y}px)`}});
