$(document).ready(function () {
        $('.hottittle .owl-carousel').owlCarousel({
            items:1,
            margin:5,
            loop:true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav:true,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            navSpeed:1000,
        })
        $('.thuonghieu .owl-carousel').owlCarousel({
            items:6,
            margin:15,
            loop:true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav:true,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            navSpeed:1000,
        })
});
