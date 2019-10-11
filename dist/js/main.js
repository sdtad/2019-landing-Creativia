$(function(){


$('.btn-menu').on('click', function(){
	$('.menu ul').slideToggle();
});	


$('.slider-carousel').slick({
	dots: false,
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	infinite: true,
		responsive: [
    	{
      		breakpoint: 1200,
      		settings: {
       			arrows: false,
        		dots: true
      		}
    	}
  		]
});

$('.clients-slider-sm').slick({
	dots: true,
	arrows: false,	
	infinite: true,
});

var mixer = mixitup('.portfolio-container'); 


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
	          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



});