const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('click', () => {
    for(let i = 0; i < wrap.length; i++) {
        wrap[i].classList.add('visible');
    }
})

closeBtn.addEventListener('click', () => {
    for(let i = 0; i < wrap.length; i++) {
        wrap[i].classList.remove('visible');
    }
})