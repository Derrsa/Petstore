
let blockOne = document.querySelector('.info__content')
let textButton = document.querySelector('.info__btn')

textButton.addEventListener('click', ()=>{
    blockOne.classList.toggle('shift')
    if(blockOne.classList.contains('shift')){
        textButton.innerText = 'Read more'
    } else {
        textButton.innerText = 'Read less'
    }
})

let burger = document.querySelector('.burger')
let menu = document.querySelector('.navigation')
let menuLinks = menu.querySelectorAll('.navigation__link')
let menuClose = document.querySelector('.navigation__close')



burger.addEventListener('click',
    function() {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('navigation--active');
        document.body.classList.toggle('stop-scroll');
    })



menuClose.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('navigation--active');
    document.body.classList.toggle('stop-scroll')
})


menuLinks.forEach(function(el){
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('navigation--active');
        document.body.classList.remove('stop-scroll')
    })
})
