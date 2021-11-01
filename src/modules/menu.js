const menu = function () {

    const menu = document.querySelector('menu');
    let menuWasClicked = false;

    document.addEventListener("click", (e) => {
        if(!menuWasClicked){
            if (e.target.closest('.menu')) {
                menu.classList.toggle('active-menu');
                menuWasClicked = true;
            }
        } else {
            if(e.target.classList.contains('close-btn') ||
                e.target.closest('ul>li>a') || !e.target.closest(".active-menu")){
                menu.classList.toggle('active-menu');
                menuWasClicked = false
            }
        }
    })
}


export default menu;