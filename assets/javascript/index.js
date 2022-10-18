// Set active class on navbar
const navbarItems = document.querySelectorAll('.navbar__item');
for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', () => {
        for (let j = 0; j < navbarItems.length; j++) {
            navbarItems[j].classList.remove('active');
        }
        navbarItems[i].classList.add('active');
    });
}