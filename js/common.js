const burMenu = document.querySelector('.burger');
const burButton = document.querySelector('.right');
const burXbutton = document.querySelector('.burger .close');
burButton.onclick= function(){
    burMenu.classList.add('active');
    console.log(2);
}

burXbutton.onclick = function(){
    burMenu.classList.remove('active');
    console.log(1);
}