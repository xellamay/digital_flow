import Swiper, { Navigation, Pagination }  from 'swiper';


export default function initSwiper() {
  new Swiper(".swiper", {
    direction: 'vertical',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      direction: "vertical",
    },
  
    modules: [Navigation, Pagination]
  });
}