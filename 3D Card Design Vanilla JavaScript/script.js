VanillaTilt.init(document.querySelectorAll('.box'),{
    max:20,
    speed:300,
    scale:1.1,
    easing: "cubic-bezier(.03,.98,.52,.99)",

})

const icon = document.querySelector('.toggleTHEME');
icon.addEventListener('click',()=>{
    document.documentElement.classList.toggle('white')
    icon.classList.toggle('active')
})