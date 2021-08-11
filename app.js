const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-items');


hamburger.addEventListener('click', () => {
 menu.classList.toggle("change");

});

let menuopen = false;
hamburger.addEventListener('click' , ()=>{
 if (!menuopen){
 hamburger.classList.add('open');
 menuopen=true;
 }else{
     hamburger.classList.remove('open');
     menuopen=false;
 }
});
