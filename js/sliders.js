const swiper1 = new Swiper('.swiper-1', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
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
        576: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
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

const swiper3 = new Swiper('.swiper-3', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }
});

const swiper4 = new Swiper('.product-menu', {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
});

if (window.matchMedia("(min-width: 768px)").matches) {
  swiper4.destroy(true, true);
} 