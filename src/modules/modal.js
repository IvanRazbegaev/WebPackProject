const modal = () => {
    const btnsList = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const screenWidth = document.documentElement.offsetWidth;
    let idInterval;
    let count = 0;

    const handleModal = () => {
        if (!modal.style.display){
            modal.style.transform = 'translateX(100%)';
            modal.style.display = 'block';
            if(screenWidth >= 738){
                modalShowUp();
            } else {
                modal.style.transform = 'translateX(0%)';
            }
        } else {
            modal.style.display = '';
        }
    };

    const modalShowUp = () => {
        count += 5
        idInterval = requestAnimationFrame(modalShowUp);
        if (count <= 100){
            modal.style.transform = `translateX(${100 - count}%)`
        } else {
            cancelAnimationFrame(idInterval);
            modal.style.display = 'block'
            count = 0;
        }
    }
    btnsList.forEach(value => value.addEventListener('click', handleModal));

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")){
            modal.style.display = ''
        }
    })

}

export default modal;