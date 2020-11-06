const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const navContainer = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')

    burger.addEventListener('click', (e) => {
        console.log('clicked')
        //burger.classList.toggle('fa-times')
        if (navContainer) {
            navContainer.classList.toggle('nav-active')
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s`
                }
            })
        }

        burger.classList.toggle('fa-times')
    })
}
navSlide()

document.querySelector('.nav__back-icon').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});