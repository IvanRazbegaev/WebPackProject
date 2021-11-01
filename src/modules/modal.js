const modal = () => {
    const btnsList = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');


    btnsList.forEach(value => {
        value.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    });

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")){
            modal.style.display = 'none'
        }
    })

}

export default modal;