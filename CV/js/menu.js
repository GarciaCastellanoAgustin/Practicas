const despmenu = document.getElementById("despmenu");
const menu = document.getElementById("navMenu");

despmenu.addEventListener("click", ()=>{
 menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
     && e.target != menu && e.target != despmenu){
        menu.classList.toggle("spread")
     }
})