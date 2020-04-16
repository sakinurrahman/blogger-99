$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')
    
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    });

    //style owlcarosoul 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:{

            0:{
                items:1,
                nav:true
            }, 

             360:{
                 items:1,
                 nav:true
             },

             600:{
                items:2,
                nav:true
            },

             900:{
                items:3,
                nav:true
            },

            1000:{
                items:3,
                nav:true,
            
            },

            1400:{
                items:5,
                nav:true,
            
            }
        },
    });

    //scroll up

    $('.scroll-up i').click(function(){
       $('html, body').animate({
         scrollTop:0
       }, 1000);
    });
   
    
});



