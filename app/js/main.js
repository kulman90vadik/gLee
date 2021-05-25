$(function(){
    $('.products-slider').slick({
        dots: true,
        arrows: false
    });

    $('.partners-slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    })

    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.menu-btn__item').toggleClass('menu-btn__item--active');
    });



    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

})