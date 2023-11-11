let menuIcon= document.querySelector(".menu-icon");
let navlist= document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
})

navlist.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open");
})

let text= document.querySelector(".text p")
text.innerHTML=text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i*6.3}deg")>${char}</b>`
).join("")



// switch button

const buttons= document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll('.content');
buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        contents.forEach(content=>content.style.display='none');
        contents[index].style.display="block";
        buttons.forEach(btn=>btn.classList.remove("active"))
        button.classList.add("active")
    })
})

// skill Progress 
const first_skill=document.querySelector(".skill:first-child");
const sk_counters=document.querySelectorAll(".counter span");
const progress_bars=document.querySelectorAll(".skill svg circle");
window.addEventListener("scroll",()=>{
    if(!skilledplay)
    skillsCounter();
})

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight){
        return true;

    }
    else{
        return false;
    }
}

function updateCount(num,maxNum){
    let curentnum=+num.innerHTML;
   console.log(curentnum);
    if(curentnum < maxNum)
    {
        num.innerText = curentnum+1;
        setTimeout(()=>{
            updateCount(num,maxNum)

        },12)
    }
}
let skilledplay=false



function skillsCounter(){
   if (!hasReached(first_skill))return;
   skilledplay=true

   sk_counters.forEach((counter,i)=>{
    let target = +counter.dataset.target;
    let storkevalue=465-465*(target/100);
    progress_bars[i].style.setProperty("--target",storkevalue)

    setTimeout(()=>{
        updateCount(counter,target);
    },400)
   })
   progress_bars.forEach(p=>p.style.animation="progress 2s ease-in-out forwards ")

}


// active 

let menuli= document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');

function activeMenu(){
    let len =section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec=>sec.classList.remove("active"));
    menuli[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu)

// Scroll revew

ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
    reset:true,

 });
ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', {origin:"top"});
ScrollReveal().reveal('.about-info,.contactinfo,.about-img', {origin:"left"});
ScrollReveal().reveal('.about-content,.skill', {origin:"right"});
ScrollReveal().reveal('.allservices,.portfolio-galary,.img-hero', {origin:"bottom"});