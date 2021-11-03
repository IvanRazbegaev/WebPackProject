const slider = (sliderBlockClass, dotBlockClass, slidesClass) => {

    const sliderBlock = document.querySelector(sliderBlockClass);
    const slides = document.querySelectorAll(slidesClass);
    const portfolioList = document.querySelector(dotBlockClass);

    let dots = document.querySelectorAll('.dot');
    let intervalID;
    let timeInterval = 2000;
    let currentSlide = 0;

    if(sliderBlock === null || slides === null || portfolioList === null ){
        return;
    }

    slides.forEach((item, index) => {

        let dot = document.createElement('li');
        dot.classList.add('dot');
        if(index === currentSlide){
            dot.classList.add('dot-active')
        }
        dot.classList.add()
        portfolioList.append(dot)
    })

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    const autoSlide = () => {
        dots = document.querySelectorAll('.dot');
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide ++;
        if (currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = (timer = 1500) => {
        intervalID = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(intervalID);
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        dots = document.querySelectorAll('.dot');
        if (!e.target.matches('.dot, .portfolio-btn')){
            return
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        if (e.target.matches('#arrow-right')){
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if(e.target.classList.contains('dot')){
            dots.forEach((dot, index) => {
                if (e.target === dot){
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length){
            currentSlide = 0;
        }

        if (currentSlide < 0){
            currentSlide = slides.length -1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')){
            stopSlide()
        }

    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')){
            startSlide(timeInterval);
        }
    }, true)

    startSlide(timeInterval);
}

export default slider;

