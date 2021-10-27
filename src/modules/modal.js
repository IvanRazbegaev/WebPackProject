const modal = () => {
    const btnsList = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalCloseBtn = modal.querySelector('.popup-close');
    const screenWidth = document.documentElement.offsetWidth;
    const linkBtn = document.querySelector('main>a');
    const serviceBlock = document.querySelector('#service-block');
    console.log(serviceBlock);

    const handleModal = () => {
        if (!modal.style.display){
            modal.style.transform = 'translateX(-100%)';
            modal.style.display = 'block';
            if(screenWidth >= 738){
                modalShowUp();
            } else {
                modal.style.transform = 'translateX(0)';
            }
        } else {
            modal.style.display = '';
        }
    };

    const modalShowUp = () => {
        let count = 0;
        const intervalId = setInterval(() => {
            count += 5
            if (count <= 100){
                modal.style.transform = `translateX(${100 - count}%)`
            } else {
                clearInterval(intervalId);
                modal.style.display = 'block'
            }
        }, 30)
    };

    const handleButtonClick = () => {
        serviceBlock.scrollIntoView({block:"center", behavior: "smooth"});
    }


    btnsList.forEach(value => value.addEventListener('click', handleModal));

    modalCloseBtn.addEventListener('click', handleModal);
    linkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleButtonClick()
    });
}

export default modal;