const hamburger=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");
const overlay=document.querySelector(".overlay");

hamburger.addEventListener('click',toggleMenu);

let showMenu=false;

function toggleMenu(){
    showMenu=!showMenu
    if(showMenu){
        hamburger.classList.add('close')
        nav.classList.add('close')
        overlay.classList.add('add')
       


    }
    else{
        hamburger.classList.remove('close')
        nav.classList.remove('close')
        overlay.classList.remove('add')
    }

}

const drop1=document.querySelector(".dropbtn1");
const subdrop1=document.querySelector(".dropdown-content1");
const arrow1=document.querySelector(".arrow1");


drop1.addEventListener('click',dropMenu1);

let showDrop1=false;

function dropMenu1(){
    showDrop1=!showDrop1
    if(showDrop1){
        subdrop1.classList.add('close')
        arrow1.classList.add('rotate')
    

    }
    else{
        subdrop1.classList.remove('close')
        arrow1.classList.remove('rotate')
    }

}




const drop2=document.querySelector(".dropbtn2");
const subdrop2=document.querySelector(".dropdown-content2");
const arrow2=document.querySelector(".arrow2");



drop2.addEventListener('click',dropMenu2);

let showDrop2=false;

function dropMenu2(){
    showDrop2=!showDrop2
    if(showDrop2){
        subdrop2.classList.add('close')
        arrow2.classList.add('rotate')
    

    }
    else{
        subdrop2.classList.remove('close')
        arrow2.classList.remove('rotate')
    }

}



const drop3=document.querySelector(".dropbtn3");
const subdrop3=document.querySelector(".dropdown-content3");
const arrow3=document.querySelector(".arrow3");


drop3.addEventListener('click',dropMenu3);

let showDrop3=false;

function dropMenu3(){
    showDrop3=!showDrop3
    if(showDrop3){
        subdrop3.classList.add('close')
        arrow3.classList.add('rotate')
    

    }
    else{
        subdrop3.classList.remove('close')
        arrow3.classList.remove('rotate')
    }

}
