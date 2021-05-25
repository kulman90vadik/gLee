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
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                    settings: {
                        slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                    settings: {
                        slidesToShow: 1
                }
            }
        ]
    })

    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.menu-btn__item').toggleClass('menu-btn__item--active');
        $(this).toggleClass('menu-btn--active');
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