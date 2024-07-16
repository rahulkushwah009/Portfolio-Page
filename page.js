let menuIcon = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sac => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offresetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [herf*='+ id +']').classList.add
                    (`active`)
            })
        }
    })
}