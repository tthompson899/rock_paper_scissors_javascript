$(document).ready(function(){
  // Input time button is clicked:
  $('.play_game').click(function(){
    var min = $('#mins').val();
    var sec = $('#secs').val();

    var clock = setInterval(getTime, 1000);

    function getTime(){
      sec -= 1; // decrease the seconds

      if(sec <= 0){ // No more Seconds...
        if (min >= 1) {// more mins so add 59 seconds
          sec = 59;
          min -= 1;
        }
        else{// no more time left
          clearInterval(clock);
        }
      }
      $('.timer').html("Minutes: " + min + " Seconds: " + sec);

    }
  });
});
