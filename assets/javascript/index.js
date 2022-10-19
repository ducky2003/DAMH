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
// Handle like button
const likeButton = document.querySelector('.post-actions__like-btn');
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    likeButton.firstElementChild.classList.toggle('fa-solid');
});
