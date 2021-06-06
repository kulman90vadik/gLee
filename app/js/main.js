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


    $('.sidebar__title').on('click', function(){
        $(this).next('.sidebar__inner').slideToggle();
        $(this).toggleClass('sidebar__title--active');
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
        $('.sidebar').toggleClass('sidebar--active');
        $('.sidebar__close').toggleClass('sidebar__close--active');
    });

    $('.sidebar__close').on('click', function(){
        $('.sidebar').removeClass('sidebar--active');
        $(this).removeClass('sidebar__close--active');
    });


    $('.sidebar__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.sidebar__min').text(data.from);
            $('.sidebar__max').text(data.to);
        },
        onChange: function (data) {
            $('.sidebar__min').text(data.from);
            $('.sidebar__max').text(data.to);
        }
    });


    $('.sidebar__star').rateYo({
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