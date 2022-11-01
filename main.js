$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });



$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(function() {
   setTimeout(function() {
     var jumpPos = $('#bio').offset().top;
     if($(document).scrollTop() <= jumpPos)
       $('html, body').animate({
         scrollTop: jumpPos
       }, 1000);
   }, 15000);
 });
 
