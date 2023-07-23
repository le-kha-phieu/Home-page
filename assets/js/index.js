window.addEventListener('scroll', () => {    
    var headerFix = document.querySelector('.header-under');
    if (window.scrollY > 200) {
        headerFix.classList.add('header-under-fix');
    } else {
        headerFix.classList.remove('header-under-fix');
    }
})



// var header = document.getElementById('header');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 50 ) {
//         header.classList.add("header-under-fix");
//         // header.classList.remove("header-under-fix");
//     } 
//     else {
//         // header.classList.add("header-under-fix");
//         header.classList.remove("header-under-fix");
//     }
// };



