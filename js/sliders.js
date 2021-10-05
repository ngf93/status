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
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
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
console.log('swiper4'+swiper4);

const swiper5 = new Swiper('.swiper-5', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 8,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

const swiper6 = new Swiper('.swiper-6', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
console.log('swiper6'+swiper6);

const swiper7 = new Swiper('.swiper-thumbs', {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
        1400: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
    }
});

const swiper8 = new Swiper('.swiper-img', {
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper7,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const swiper9 = new Swiper('.swiper-9', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1660: {
            slidesPerView: 5,
            spaceBetween: 48,
        }
    }
});


if (window.matchMedia("(min-width: 768px)").matches) {
    if(document.querySelector('.product-menu')!= null){
        swiper4.destroy(true, true);
    }
    if(document.querySelector('.swiper-6')!= null){
        swiper6.destroy(true, true);
    }
} 