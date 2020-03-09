const navslide = () => {
    const burger = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {

       menu.classList.toggle('menu-active');

    })
}

navslide();
