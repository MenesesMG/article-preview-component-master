const share_button = document.getElementById('share_button');
const modal_container = document.getElementById('modal_container');

share_button.addEventListener('click', () => {
    modal_container.classList.toggle('show');
});