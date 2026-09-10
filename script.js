const progress=document.querySelector(".progress");
addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(scrollY/max*100)+"%";
});
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".manifesto-grid,.values,.peek-copy,.peek-visual,.emotional-inner,.story>div,.cta").forEach(x=>observer.observe(x));
