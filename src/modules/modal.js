import {animate} from "./helpers";

const modal = () => {
    const btnsList = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalCloseBtn = modal.querySelector('.popup-close');
    const screenWidth = document.documentElement.offsetWidth;
    let idInterval;
    let count = 0;

    const handleModal = () => {
        if (!modal.style.display){
            modal.style.transform = 'translateX(100%)';
            modal.style.display = 'block';
            if(screenWidth >= 738){
                animate({
                    duration: 500,
                    timing(timeFraction){
                        return timeFraction;
                    },
                    draw(progress){
                        modal.style.transform = `translateX(${100 - progress*100}%)`
                    }});
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

    modalCloseBtn.addEventListener('click', handleModal);

}

export default modal;