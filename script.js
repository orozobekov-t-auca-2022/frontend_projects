const hamMenu = document.querySelector('.three_lines');

const offScreenMenu = document.querySelector('.off_screen_menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})