const BUY="https://hotmart.com/es/marketplace/productos/a-tu-ritmo-contigo/H106909473F";
const WA="https://wa.me/573217543838";
const IG="https://www.instagram.com/aturitmocontigo_?stkn=aGFtYTVjd3N6am5p";

document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(h>0?(scrollY/h)*100:0)+"%";
},{passive:true});

const menuToggle=document.getElementById("menuToggle"), mobileMenu=document.getElementById("mobileMenu");
menuToggle?.addEventListener("click",()=>{
  const open=mobileMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("is-open")));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");revealObserver.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll(".top-nav a")];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>sectionObserver.observe(s));

document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>openModal(btn.dataset.open)));
const modal=document.getElementById("modal");
const modalData={
  "que-es":{k:"¿QUÉ ES?",t:"Una guía para acompañar",p:"Una experiencia digital pensada para familias que quieren descubrir maneras sencillas de jugar, observar y conectar con su bebé, sin convertir cada momento en una tarea.",tags:["Jugar","Descubrir","Conectar","A tu ritmo"]},
  actividades:{k:"DENTRO",t:"22 actividades",p:"Una colección de propuestas para explorar momentos cotidianos con intención, curiosidad y juego. No necesitas hacerlas todas ni seguir un orden rígido.",tags:["22 actividades","Ideas prácticas","Juego","Conexión"]},
  edades:{k:"EXPLORA",t:"Por edades",p:"La experiencia está organizada para que puedas acercarte a lo que tiene sentido para la etapa y el momento de tu bebé.",tags:["Explorar","Observar","Elegir","Volver"]},
  materiales:{k:"SIN COMPLICAR",t:"Materiales sencillos",p:"La propuesta busca que el juego pueda ocurrir con cosas cercanas y situaciones que ya forman parte de tu día.",tags:["Casa","Cotidiano","Simple","Creativo"]},
  areas:{k:"ACOMPAÑAR",t:"Áreas de desarrollo",p:"Las actividades invitan a observar diferentes formas de interacción y descubrimiento, siempre desde el vínculo y el juego.",tags:["Curiosidad","Movimiento","Lenguaje","Vínculo"]}
};
function openModal(key){
  const d=modalData[key]||modalData["que-es"];
  document.getElementById("modalKicker").textContent=d.k;
  document.getElementById("modalTitle").textContent=d.t;
  document.getElementById("modalText").textContent=d.p;
  document.getElementById("modalPills").innerHTML=d.tags.map(x=>`<span>${x}</span>`).join("");
  modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");
}
function closeModal(){modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true")}
document.querySelectorAll("[data-close-modal]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const facts=[
"Las actividades más valiosas no necesitan ser complicadas: la interacción contigo es parte esencial de la experiencia.",
"El juego cotidiano puede abrir oportunidades para mirar, escuchar y seguir la curiosidad de tu bebé.",
"No existe una única manera correcta de acompañar: cada familia puede encontrar su propio ritmo.",
"A veces, la mejor actividad es la que termina en una sonrisa, una mirada compartida o un momento de conexión."
];
let fact=0;
const factText=document.getElementById("factText"), factIndex=document.getElementById("factIndex");
document.getElementById("factNext").addEventListener("click",()=>{
  fact=(fact+1)%facts.length;
  factText.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:360,easing:"cubic-bezier(.2,.8,.2,1)"});
  factText.textContent=facts[fact];
  factIndex.textContent=String(fact+1).padStart(2,"0");
});
setInterval(()=>document.getElementById("factNext").click(),6500);

const track=document.getElementById("storyTrack");
const cards=[...track.children];
let storyIndex=0;
function moveStories(){
  const cardWidth=cards[0].getBoundingClientRect().width+16;
  track.style.transform=`translateX(-${storyIndex*cardWidth}px)`;
}
document.getElementById("nextStories").addEventListener("click",()=>{
  storyIndex=(storyIndex+1)%cards.length;moveStories();
});
document.getElementById("prevStories").addEventListener("click",()=>{
  storyIndex=(storyIndex-1+cards.length)%cards.length;moveStories();
});
let storyTimer=setInterval(()=>document.getElementById("nextStories").click(),5000);
document.querySelector(".story-viewport").addEventListener("mouseenter",()=>clearInterval(storyTimer));
document.querySelector(".story-viewport").addEventListener("mouseleave",()=>storyTimer=setInterval(()=>document.getElementById("nextStories").click(),5000));
window.addEventListener("resize",moveStories);

const tabs=[...document.querySelectorAll(".tab-button")];
tabs.forEach(tab=>tab.addEventListener("click",()=>{
  tabs.forEach(t=>t.classList.remove("is-active"));
  document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("is-active"));
  tab.classList.add("is-active");
  document.getElementById("tab-"+tab.dataset.tab).classList.add("is-active");
}));

let counted=false;
const counterObserver=new IntersectionObserver(es=>{
  if(es[0].isIntersecting&&!counted){
    counted=true;
    let n=0;const target=22;const el=document.getElementById("activityCounter");
    const timer=setInterval(()=>{n++;el.textContent=n;if(n>=target)clearInterval(timer)},55);
    counterObserver.disconnect();
  }
},{threshold:.6});
counterObserver.observe(document.getElementById("activityCounter"));

const ageCopy={
  hoy:["Empieza pequeño.","Elige una actividad que puedas hacer con calma y deja que el momento marque el ritmo."],
  jugar:["Déjate llevar.","No necesitas un juego perfecto. Sigue lo que despierte su curiosidad y disfruta la interacción."],
  observar:["Mira antes de intervenir.","Observar también es acompañar: descubre qué llama su atención y qué intenta comunicar."],
  guardar:["Hazlo tuyo.","Guarda las ideas que más les gusten y vuelve a ellas cuando quieran, sin presión."]
};
document.querySelectorAll(".age-card").forEach(card=>card.addEventListener("click",()=>{
  document.querySelectorAll(".age-card").forEach(c=>c.classList.remove("is-selected"));
  card.classList.add("is-selected");
  const [title,text]=ageCopy[card.dataset.age];
  const box=document.getElementById("ageResponse");
  box.animate([{opacity:.2,transform:"translateX(12px)"},{opacity:1,transform:"none"}],{duration:350});
  box.querySelector("b").textContent=title;
  box.querySelector("p").textContent=text;
}));

document.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("click",()=>item.classList.toggle("is-open")));

const stage=document.getElementById("ebookStage");
stage?.addEventListener("pointermove",e=>{
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  stage.querySelector(".book").style.transform=`rotateY(${-13+x*18}deg) rotateZ(${-2+y*4}deg) translateY(${y*-8}px)`;
});
stage?.addEventListener("pointerleave",()=>stage.querySelector(".book").style.transform="rotateY(-13deg) rotateZ(-2deg)");

document.querySelectorAll(".parallax").forEach(el=>{
  window.addEventListener("scroll",()=>{
    const rect=el.getBoundingClientRect();
    const offset=(window.innerHeight/2-(rect.top+rect.height/2))*el.dataset.speed;
    el.style.translate=`0 ${offset}px`;
  },{passive:true});
});

// Gentle touch feedback for CTAs.
document.querySelectorAll(".buy-button,.mobile-buy").forEach(btn=>{
  btn.addEventListener("pointerdown",()=>btn.style.transform="scale(.97)");
  btn.addEventListener("pointerup",()=>btn.style.transform="");
  btn.addEventListener("pointercancel",()=>btn.style.transform="");
});
