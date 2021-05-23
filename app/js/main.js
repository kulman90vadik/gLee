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

    // var mixer = mixitup('.products-week__inner');
    // var mixer = mixitup('.desing__inner');
    

    $('#products-week__inner').mixItUp({
        selectors: {
            filter: '.filter'
        }
    });
    
    $('#desing__inner').mixItUp({
        selectors: {
            filter: '.filter-2'
        }
    });



})