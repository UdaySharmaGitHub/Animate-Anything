document.body.addEventListener('click',(e)=>{
    const clickElement =e.target;
    imgs = document.querySelectorAll('.img')
    if(!clickElement.classList.contains('img')){
        imgs.forEach(img => img.classList.remove('open'));
            return;
        }

    if(clickElement.classList.contains("open")){
        clickElement.classList.remove("open");
        return;
    }
    imgs.forEach((img) => img.classList.remove("open"));
    clickElement.classList.add("open");
})

document.body.addEventListener("click", (event) => {});