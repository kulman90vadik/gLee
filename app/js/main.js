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

    $('.catalog-filter__title').on('click', function(){
        $(this).next('.catalog-filter__inner').slideToggle();
        $(this).toggleClass('catalog-filter__title--active');
    });

    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.menu-btn__item').toggleClass('menu-btn__item--active');
    });


    $('.catalog-sort__icon').on('click', function(){
        $('.catalog-sort__icon').removeClass('catalog-sort__icon--active');
        $(this).addClass('catalog-sort__icon--active');
    });

    $('.catalog-sort__line').on('click', function(){
        $('.catalog-cards__items').addClass('catalog-cards__items--line');
    });
    $('.catalog-sort__grid').on('click', function(){
        $('.catalog-cards__items').removeClass('catalog-cards__items--line');
    });

    $('.catalog-sort__items--filter').on('click', function(){
        $('.catalog-filter').toggleClass('catalog-filter--active');
        $('.catalog-filter__close').toggleClass('catalog-filter__close--active');
    });

    $('.catalog-filter__close').on('click', function(){
        $('.catalog-filter').removeClass('catalog-filter--active');
        $(this).removeClass('catalog-filter__close--active');
    });


    $('.catalog-filter__input').ionRangeSlider({
        type: "double",
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