const cards = document.querySelectorAll('.feature-card');
const revealTitle = document.querySelector('#revealBox strong');
const revealText = document.querySelector('#revealBox p');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    revealTitle.textContent = card.dataset.title;
    revealText.textContent = card.dataset.text;
  });
});

const tabs = document.querySelectorAll('.tab');
const panel = document.querySelector('#tabPanel');
const tabData = {
  actividades: ['🎈','22 actividades','Una selección de propuestas para explorar el juego y acompañar diferentes momentos del desarrollo.'],
  edades: ['👶','Organizado por edades','Encuentra ideas según la etapa y el momento que estés viviendo con tu bebé.'],
  materiales: ['🧸','Materiales sencillos','Propuestas pensadas para usar elementos cotidianos, sin complicar la preparación.'],
  objetivos: ['✨','Objetivos claros','Cada propuesta tiene una intención para que sepas qué estás acompañando mientras juegan.'],
  notas: ['💛','Notas para mamá','Pequeños recordatorios para disfrutar el proceso sin convertir el juego en una obligación.']
};
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const d = tabData[tab.dataset.tab];
  panel.innerHTML = `<span class="panel-icon">${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p>`;
}));

const facts = [
  'El juego no necesita ser complicado para ser significativo.',
  'Los momentos cotidianos también pueden convertirse en oportunidades para conectar.',
  'A veces, acompañar significa simplemente estar disponible y disfrutar juntos.',
  'La curiosidad de un bebé puede convertir un objeto cotidiano en todo un descubrimiento.'
];
let factIndex = 0;
document.querySelector('#nextFact').addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  document.querySelector('#fact').animate([{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'translateY(0)'}], {duration:280});
  document.querySelector('#fact').textContent = facts[factIndex];
});
