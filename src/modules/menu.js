const menu = function () {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeMenu = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {

        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);

    closeMenu.addEventListener('click', handleMenu);

    menuItems.forEach(value => {
      value.addEventListener('click', handleMenu);
    })
}

export default menu;