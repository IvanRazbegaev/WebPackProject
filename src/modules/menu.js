const menu = function () {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeMenu = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const linkBtn = document.querySelector('main>a');
    const serviceBlock = document.querySelector('#service-block');

    const handleMenu = () => {

        menu.classList.toggle('active-menu');
    }

    const handleButtonClick = () => {
        serviceBlock.scrollIntoView({block:"center", behavior: "smooth"});
    }

    menuBtn.addEventListener('click', handleMenu);

    closeMenu.addEventListener('click', handleMenu);

    menuItems.forEach(value => {
      value.addEventListener('click', handleMenu);
    })
    linkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleButtonClick()
    });
}

export default menu;