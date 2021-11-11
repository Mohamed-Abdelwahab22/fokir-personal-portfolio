
$(window).scroll(function(){
    let scrollVal = $(".navbar").offset()
    if( scrollVal.top > 250){
    $(".navbar").removeClass("bg-transparent , pt-3")
    $(".navbar").addClass("bg-dark , shadow-sm")
    }
    else{
        $(".navbar").removeClass("bg-dark , shadow-sm")
        $(".navbar").addClass("bg-transparent , pt-3")
    }
})

$(".nav-link").click(function(){
    $(this).addClass("pinkColor")
    $(".nav-link").not($(this)).removeClass("pinkColor")
})





$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[769,1],
        pagination:true,
        transitionStyle:"goDown",
        autoplay:true
    });

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

});