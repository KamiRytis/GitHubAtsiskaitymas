const intro = document.querySelector("#intro");
const introTab=document.querySelector("#introTab");
const work = document.querySelector("#work");
const workTab=document.querySelector("#workTab");
const about = document.querySelector("#about");
const aboutTab=document.querySelector("#aboutTab");
const contact = document.querySelector("#contact");
const contactTab=document.querySelector("#contactTab");
const mainPage = document.querySelector("#mainPage");



intro.addEventListener("click", e =>{
    e.preventDefault();
    mainPage.classList.add("noDisplay");
    introTab.classList.add("display");
})

work.addEventListener("click", e =>{
    e.preventDefault();
    mainPage.classList.add("noDisplay");
    workTab.classList.add("display");
})

about.addEventListener("click", e =>{
    e.preventDefault();
    mainPage.classList.add("noDisplay");
    aboutTab.classList.add("display");
})

contact.addEventListener("click", e =>{
    e.preventDefault();
    mainPage.classList.add("noDisplay");
    contactTab.classList.add("display");
})
document.querySelectorAll("#closeBtn").forEach(button=>{
    button.addEventListener("click", e =>{
    e.preventDefault();
    mainPage.classList.remove("noDisplay");
    introTab.classList.remove("display");
    workTab.classList.remove("display");
    aboutTab.classList.remove("display");
    contactTab.classList.remove("display");})
})