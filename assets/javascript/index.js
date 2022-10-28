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
const likeButtons = document.querySelectorAll('.post-actions__like-btn');
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', () => {
        likeButtons[i].classList.toggle('liked');
        likeButtons[i].firstElementChild.classList.toggle('fa-solid');
    })
}
// Handle comment modal
function handleDisplayCommentModal() {
    const commentButtons = document.querySelectorAll('.see-comments');
    const commentModal = document.querySelector('.comment-modal');
    const commentModalClose = document.querySelector('.comment-modal__header__close-btn');
    console.log(commentModalClose);
    for (let i = 0; i < commentButtons.length; i++) {
        commentButtons[i].addEventListener('click', () => {
            commentModal.classList.add('show-comment-modal');
        });
    }
    commentModalClose.addEventListener('click', () => {
        commentModal.classList.add('hide-comment-modal');
        setTimeout(() => {
            commentModal.classList.remove('show-comment-modal');
            commentModal.classList.remove('hide-comment-modal');
        }, 500);
    }
    );
}

handleDisplayCommentModal();