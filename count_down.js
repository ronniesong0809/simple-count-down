function animation(n) {
  $('#countdown').fadeIn('fast', function () {
    if ($(this).html() == "" || $(this).html() == 3) {
      $(this).html(n);
      
    }
  
    $('#countdown').delay(600).hide('puff', 400, function () {
      if (n == 0) {
        blinking();

      } else {
        n--;

      }

      $(this).html(n);
      animation(n);
    });
  });
}

function blinking() {
  $("body").css("background-color", 'grey');
  
  setTimeout(function () {
    $("body").css("background-color", 'white');

  }, 300);
}

$(function () {
  animation(3);

});