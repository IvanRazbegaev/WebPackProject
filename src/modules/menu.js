const menu = function () {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handleMenu = () => {

        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);
    menu.addEventListener("click", (e) => {
        console.log();
        if(e.target.classList.contains('close-btn') || e.target.closest('ul>li>a')){
            handleMenu();
        }
    })
}


export default menu;