/** First Slider 
$(."slider-one")
.not(".slick-initialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
}); */

var owl = $('.owl-carousel')
owl.owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        600:{
            items:1
        }
    }
})