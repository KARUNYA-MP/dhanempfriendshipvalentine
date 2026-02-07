let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(i){
    pages.forEach(p=>p.classList.remove("active"));
    pages[i].classList.add("active");
}
function nextPage(){
    if(currentPage < pages.length-1){
        currentPage++;
        showPage(currentPage);
    }
}
function restart(){
    currentPage = 0;
    showPage(currentPage);
}

/* NO button escape */
function moveNo(){
    const b = document.getElementById("noBtn");
    b.style.position="absolute";
    b.style.left=Math.random()*80+"vw";
    b.style.top=Math.random()*80+"vh";
}

/* HEART + BUTTERFLY + SPARK */
const symbols = ["💖","💙","🦋","✨","💫"];

function createEffect(){
    const e = document.createElement("div");
    e.className="effect";
    e.innerText=symbols[Math.floor(Math.random()*symbols.length)];
    e.style.left=Math.random()*100+"vw";
    e.style.fontSize=(Math.random()*12+16)+"px";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),9000);
}
setInterval(createEffect,400);
