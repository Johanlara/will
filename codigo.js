'use strict';

const btn = document.querySelector('.no');
const btnS = document.querySelector('.si');
const msn = document.querySelector('.msn');
const contenedor = document.querySelector('.container-sm');
const conImg = document.querySelector('.con-img');

const mover = () => {
    let numLeft = Math.trunc(Math.random() * 100);
    let numH = Math.trunc(Math.random() * 100);

    btn.style.left = `${numLeft}%`;
    btn.style.top = `${numH}%`;

}

setInterval(mover, 400);

btnS.addEventListener('click', () => {
    msn.style.opacity = 1;
    msn.style.zIndex = 1;

})

btn.addEventListener('click', () => {
    conImg.style.zIndex = '2';
    conImg.style.opacity = '1';
})

contenedor.addEventListener('click', () => {
    navigator.vibrate([300, 100, 300])
})