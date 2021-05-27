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
    });



    $('.catalog-filter__input').ionRangeSlider({
        type: "double",
        // prefix: "$",
        onStart: function (data) {
            $('.catalog-filter__min').text(data.from);
            $('.catalog-filter__max').text(data.to);
        },
        onChange: function (data) {
            $('.catalog-filter__min').text(data.from);
            $('.catalog-filter__max').text(data.to);
        }
    });


    $('.catalog-filter__star').rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "7px"
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