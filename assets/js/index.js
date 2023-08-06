window.addEventListener('scroll', () => {    
    var headerFix = document.querySelector('.header-under');
    if (window.scrollY > 180) {
        headerFix.classList.add('header-under-fix');
    } else {
        headerFix.classList.remove('header-under-fix');
    }   
})


// design product page
