$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 200){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });

    // Banner Slide 
    
$('.banner_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

//   Service Slide 

$('.service_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

//   Portfolio Item 
var containerEl = document.querySelector('.filter_project');

var mixer = mixitup(containerEl);

// Video Part 
$('.venobox').venobox();

// Counter Up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});     

//   Blog Slide 

$('.blog_sliderr').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
  });
})