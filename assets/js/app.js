const navFixed = document.querySelector('.nav__fixed')

document.addEventListener('scroll',function(e){
    const heightY = scrollY
    const navY = navFixed.offsetHeight
    if(heightY > navY){
        navFixed.classList.add('scroll')
    }else{
        navFixed.classList.remove('scroll')
    }
})