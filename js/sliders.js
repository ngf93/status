const swiper1 = new Swiper('.swiper-1', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }
});
  
const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1660: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
});