/* ================================================= */
/* script.js */
/* ================================================= */

const pages = {
home: document.getElementById("homeSection"),
reward: document.getElementById("rewardSection"),
market: document.getElementById("marketSection"),
profile: document.getElementById("profileSection")
};

const navButtons = {
home: document.getElementById("homeBtn"),
reward: document.getElementById("rewardBtn"),
market: document.getElementById("marketBtn"),
profile: document.getElementById("profileBtn")
};

/* ========================= */
/* NAVIGATION */
/* ========================= */

function showPage(page){

Object.values(pages).forEach(section=>{
section.classList.remove("active-page");
});

pages[page].classList.add("active-page");

Object.values(navButtons).forEach(btn=>{
btn.classList.remove("active-nav");
});

navButtons[page].classList.add("active-nav");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

navButtons.home.onclick=()=>{
showPage("home");
};

navButtons.reward.onclick=()=>{
showPage("reward");
};

navButtons.market.onclick=()=>{
showPage("market");
};

navButtons.profile.onclick=()=>{
showPage("profile");
};

/* ========================= */
/* POPUP */
/* ========================= */

const popup = document.getElementById("popup");

document.querySelectorAll(".popup-btn")
.forEach(button=>{

button.addEventListener("click", ()=>{

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2000);

});

});

/* ========================= */
/* MODE SOMBRE / CLAIR */
/* ========================= */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("change", ()=>{

document.body.classList.toggle("light");

});

/* ========================= */
/* NOTIFICATION */
/* ========================= */

document.getElementById("notifBtn")
.addEventListener("click", ()=>{

popup.innerText="Aucune notification";

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

popup.innerText="Service disponible bientôt";

},2000);

});

/* ========================= */
/* CACHER / VOIR SOLDE */
/* ========================= */

const balanceText =
document.getElementById("balanceText");

const cfaText =
document.getElementById("cfaText");

const toggleBalance =
document.getElementById("toggleBalance");

let visible = true;

toggleBalance.addEventListener("click", ()=>{

visible = !visible;

if(visible){

balanceText.innerText="0";
cfaText.innerText="≈ 0 CFA";

toggleBalance.innerHTML=
'<i class="fa-regular fa-eye"></i>';

}else{

balanceText.innerText="••••";
cfaText.innerText="≈ ••••";

toggleBalance.innerHTML=
'<i class="fa-regular fa-eye-slash"></i>';

}

});

/* ========================= */
/* ROUE */
/* ========================= */

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

let rotation = 0;

spinBtn.addEventListener("click", ()=>{

const random =
Math.floor(Math.random()*360);

rotation += 1440 + random;

wheel.style.transform =
`rotate(${rotation}deg)`;

popup.innerText =
"Bonne chance 🎉";

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

popup.innerText=
"Service disponible bientôt";

},2000);

});

/* ========================= */
/* CITATIONS */
/* ========================= */

const quotes = [

"Le succès appartient à ceux qui n'abandonnent jamais.",

"Chaque jour est une nouvelle opportunité.",

"Votre avenir commence aujourd’hui.",

"Croyez en vos rêves.",

"Le futur appartient aux courageux.",

"Continuez même lentement.",

"Le travail finit toujours par payer.",

"Transformez vos idées en réalité.",

"Le succès aime la discipline.",

"Soyez fier de votre progression.",

"Chaque victoire commence par un essai.",

"Ne cessez jamais d’apprendre.",

"Le progrès est une force.",

"Votre motivation est votre richesse.",

"Un petit effort chaque jour change tout.",

"Construisez votre avenir numérique.",

"Les grandes choses prennent du temps.",

"Votre potentiel est immense.",

"La persévérance crée le succès.",

"Bienvenue dans l’univers BCC."

];

const centerBtn =
document.getElementById("centerBtn");

const quotePopup =
document.getElementById("quotePopup");

const quoteText =
document.getElementById("quoteText");

const closeQuote =
document.getElementById("closeQuote");

centerBtn.addEventListener("click", ()=>{

const randomQuote =
quotes[Math.floor(
Math.random()*quotes.length
)];

quoteText.innerText =
randomQuote;

quotePopup.classList.remove("hidden");

});

closeQuote.addEventListener("click", ()=>{

quotePopup.classList.add("hidden");

});

/* ========================= */
/* ANIMATION BCC */
/* ========================= */

let current = 0;

setInterval(()=>{

current++;

document.getElementById("balanceText")
.innerText = current;

document.getElementById("cfaText")
.innerText =
"≈ " + (current*5) + " CFA";

if(current>=10){
current=0;
}

},4000);
