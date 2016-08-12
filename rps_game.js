$(document).ready(function(){
  // Input time button is clicked:
  $('.play_game').click(function(){
    var min = $('#mins').val();
    var sec = $('#secs').val();

    $('.timer').html("Minutes: " + min + " Seconds: " + sec);
  });
});
