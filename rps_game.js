$(document).ready(function(){
  // set the time to zero:
  $('.time_holder').text("Minutes: " + 0 + " Seconds: " + 0);

  // User input time, .click is triggered
  $('.play_game').click(function(){
    var min = $('#mins').val();
    var sec = $('#secs').val();

    var clock = setInterval(getTime, 1000);

    function getTime(){
      sec -= 1; // decrease the seconds

      // Warn if 10 seconds remaining
      if(sec == 10 && min == 0){
         $('.warning').text("10 SECONDS REMAINING!");
      }
      else if (sec == 0 && min == 0) {
        $('.warning').hide(); // hide warning once countdown complete
      }

      if(sec <= 0){ // No more Seconds...
        if (min >= 1) { // more mins so add 59 seconds
          sec = 59;
          min -= 1;
        }
        else{// no more time left
          clearInterval(clock);
        }
      }
      else if(min == ''){ // if user did not input min, set to zero
        min = 0;
      }

      $('.time_holder').text("Minutes: " + min + " Seconds: " + sec);
    }

    // Clear the input fields
    $('#mins').val('');
    $('#secs').val('');
  });
});
