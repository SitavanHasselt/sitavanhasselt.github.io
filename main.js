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

 
$( function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
  
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
    formData = {
      'name'     : $('input[name=name]').val(),
      'email'    : $('input[name=email]').val(),
      'subject'  : $('input[name=subject]').val(),
      'message'  : $('textarea[name=message]').val()
  };

  $.ajax({
  url : "mail.php",
  type: "POST",
  data : formData,
  success: function(data, textStatus, jqXHR)
  {

      $('#status').text(data.message);
      if (data.code) //If mail was sent successfully, reset the form.
      $('#contact-form').closest('form').find("input[type=text], textarea").val("");
  },
  error: function (jqXHR, textStatus, errorThrown)
  {
      $('#status').text(jqXHR);
  }
  });

});