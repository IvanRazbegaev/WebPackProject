import {animate} from "./helpers";

const modal = () => {
    const btnsList = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalCloseBtn = modal.querySelector('.popup-close');
    const screenWidth = document.documentElement.offsetWidth;

    const handleModal = () => {
        if (!modal.style.display){
            modal.style.backgroundColor = 'rgba(229,229,229, 0)';
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

    btnsList.forEach(value => value.addEventListener('click', handleModal));

    modalCloseBtn.addEventListener('click', handleModal);

}

export default modal;