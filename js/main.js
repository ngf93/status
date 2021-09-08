const swiper1 = new Swiper('.swiper-1', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper-2', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// let anchors = Array.from(document.querySelectorAll('.to-anchor'));
// anchors.forEach(function(item, i, arr) {
//   item.addEventListener('click', () => {
//     document.querySelectorAll(item.href).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// });