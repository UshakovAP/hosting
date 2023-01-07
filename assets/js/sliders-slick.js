// Intro slider

let introSlider = $('#introSlider');

introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autospeed: 4000,
    speed: 500,
});

// Testimonials slider

let testimonialsSlider = $('#testimonialsSlider');

testimonialsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autospeed: 4000,
    speed: 500,
});
