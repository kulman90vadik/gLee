$(function(){
    $('.products-slider').slick({
        dots: true,
        arrows: false
    });

    $('.logos-slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    })

    var mixer = mixitup('.products-week__inner');
    
})