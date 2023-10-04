new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: 'slide',
    slidesPerView: 3,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});