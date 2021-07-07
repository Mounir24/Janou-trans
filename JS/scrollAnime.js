
/*====== SLICK JS ======*/
$(".show-case-slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});

// PARTNERS SLIDER ANIMATION
$(".partners_slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});

// TIMELINE SLIDER ANIMATION
$(".timeline-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});


// CERTIFICATES SLIDER ANIMATION
$(".certificates-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});

// CERTIFICATES SLIDER ANIMATION
$(".turnOver-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});


// MAGIFIQE POP UP ANIMATION

$('.magnifique-container').magnificPopup({
    delegate: 'img', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  })