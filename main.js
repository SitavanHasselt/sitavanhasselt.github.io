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
