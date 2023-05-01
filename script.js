let animalCard = document.querySelectorAll('.slider__card')
let animalSlider = document.querySelector('.slider__wrapper')
let trackSlider = document.querySelector('.slider__content')
let sliderWidth = animalSlider.clientWidth
let position = 0
let cardCount = animalCard.length
let animalCardWidth = ((sliderWidth/3)) - 9
let nextButton = document.querySelector('.slider__btn-next')
let backButton = document.querySelector('.slider__btn-back')

animalCard.forEach( (el)=>{
    el.style.minWidth = animalCardWidth + 'px'
})

nextButton.addEventListener('click', ()=>{
    position -= animalCardWidth + 9
    setPosition()
    checkButtons()

})

backButton.addEventListener('click', ()=>{
    position += animalCardWidth + 9
    setPosition()
    checkButtons()
})

function setPosition(){
    trackSlider.style.transform =`translateX(${position}px)`
}

function checkButtons() {
    backButton.disabled = position >= 0;
    nextButton.disabled = position <= -(cardCount - 3) * animalCardWidth;

}
checkButtons()



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
