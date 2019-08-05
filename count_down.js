function animation(n) {
  $('#countdown').fadeIn('fast', function () {
    if ($(this).html() == "" || $(this).html() == 3) {
      $(this).html(n);
    }

    $('#countdown').delay(600).hide('puff', 400, function () {
      if (n == 0) {
        blinking();
        n = 3;
        $('#countdown').show();
      }

      else {
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

  $('#countdown').hide();
}

$(function () {
  animation(3);
});