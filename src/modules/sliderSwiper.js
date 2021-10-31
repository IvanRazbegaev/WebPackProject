import Swiper from "swiper";

const sliderSwiper = () => {
  const slider = new Swiper('.swiper', {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true,
      breakpoints: {
          768:{
              slidesPerView: 2,
          },
          1250: {
              slidesPerView: 3,
          }
      }

  })
}
export default sliderSwiper;