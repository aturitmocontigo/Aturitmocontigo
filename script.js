const DONATION_URL = "https://fundacion.cardioinfantil.org/donar.html";
const MIN_AMOUNT = 1000;

const buttons = document.querySelectorAll(".amount-btn");
const customInput = document.getElementById("customAmount");
const customContinue = document.getElementById("customContinue");
const error = document.getElementById("amountError");
const toast = document.getElementById("toast");

function money(value){
  return new Intl.NumberFormat("es-CO").format(value);
}

function track(action, params={}){
  if(typeof window.gtag === "function"){
    window.gtag("event", action, params);
  }
}

function goToDonation(amount){
  track("donation_button_click", {
    currency: "COP",
    value: amount,
    donation_amount: amount
  });
  window.location.href = `${DONATION_URL}?monto=${encodeURIComponent(amount)}`;
}

buttons.forEach(button=>{
  button.addEventListener("click", ()=>{
    const amount = Number(button.dataset.amount);
    goToDonation(amount);
  });
});

function cleanNumber(value){
  return String(value).replace(/[^\d]/g,"");
}

customInput.addEventListener("input", ()=>{
  const digits = cleanNumber(customInput.value);
  customInput.value = digits ? money(Number(digits)) : "";
  error.textContent = "";
});

customContinue.addEventListener("click", ()=>{
  const amount = Number(cleanNumber(customInput.value));
  if(!amount || amount < MIN_AMOUNT){
    error.textContent = `Ingresa un valor válido de mínimo $${money(MIN_AMOUNT)}.`;
    customInput.focus();
    track("custom_donation_error");
    return;
  }
  goToDonation(amount);
});

document.getElementById("instagramLink").addEventListener("click", ()=>{
  track("instagram_click");
});

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2800);
}
