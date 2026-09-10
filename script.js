const $=s=>document.querySelector(s);
const progress=$('.progress');
addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});

const modalData={
 actividad:['Una actividad puede cambiar el momento.','Las propuestas están pensadas para que el juego ocurra de forma sencilla, cercana y disfrutable. No necesitas convertirlo en una clase.'],
 edades:['¿Para qué edad?','El contenido está organizado para ayudarte a encontrar ideas según las diferentes etapas y momentos de tu bebé.'],
 materiales:['¿Necesito comprar materiales?','La idea es que puedas aprovechar objetos y materiales sencillos que ya forman parte de tu día a día.'],
 objetivos:['¿Qué acompaña cada actividad?','Cada propuesta tiene una intención clara y una forma sencilla de entender qué estás acompañando mientras comparten.']
};
document.querySelectorAll('.discovery-card').forEach(b=>b.onclick=()=>{
 const d=modalData[b.dataset.modal]; $('#modalTitle').textContent=d[0];$('#modalText').textContent=d[1];$('#modal').classList.add('show');
});
$('#close').onclick=()=>$('#modal').classList.remove('show');
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.remove('show')};

const chipResult=$('.chip-result');
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{
 document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');
 chipResult.querySelector('strong').textContent=c.dataset.inside;
 chipResult.querySelector('p').textContent={
 '22 actividades':'Ideas pensadas para acompañar distintos momentos.',
 'Por edades':'Encuentra propuestas según la etapa que estén viviendo.',
 'Materiales sencillos':'Elementos cotidianos para preparar sin complicarte.',
 'Objetivos':'Descubre qué intención hay detrás de cada propuesta.',
 'Notas para mamá':'Recordatorios para disfrutar el proceso sin presión.'
 }[c.dataset.inside];
});

const chats=[
['¿Sabes qué me gustó? Que puedo hacerlo cuando tenemos un ratito 💛','Y no siento que estoy “fallando” si un día no hacemos nada.','Eso cambia todo.'],
['Mi bebé se ríe muchísimo con una de las actividades 😂','Yo terminé disfrutándola más que él jajaja.','Definitivamente la voy a repetir.'],
['Hoy necesitaba una idea rápida y abrí el eBook. ✨','Encontré una actividad con cosas que ya tenía.','Fue nuestro momento favorito del día.']
];
let ci=0;
$('#nextChat').onclick=()=>{
 ci=(ci+1)%chats.length;
 const body=$('#chatBody');body.innerHTML='<div class="day">HOY</div>';
 chats[ci].forEach((m,i)=>{const d=document.createElement('div');d.className='msg '+(i===1?'sent':'received');d.innerHTML=m+'<small>10:'+(46+i)+' '+(i===1?'✓✓':'')+'</small>';body.appendChild(d)});
};

const facts=['El juego cotidiano también puede ser una forma de conexión.','La curiosidad aparece en los momentos más sencillos.','Acompañar no significa entretener todo el tiempo.','Un objeto cotidiano puede convertirse en una oportunidad para descubrir.'];
let fi=0;$('#factBtn').onclick=()=>{fi=(fi+1)%facts.length;$('#factText').animate([{opacity:0},{opacity:1}],{duration:300});$('#factText').textContent=facts[fi]};

function placeholderContact(type){alert('Aquí conectaremos el '+type+' real cuando nos compartas el enlace o número oficial.');return false;}
