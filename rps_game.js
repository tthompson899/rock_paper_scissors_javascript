$(document).ready(function(){
  // set the time to zero:
  $('.time_holder').text("Minutes: " + 0 + " Seconds: " + 0);

  // User input time, .click is triggered
  $('#play_game').click(function(){
    options(); // get the choice of the user

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
        // Hide options div when times up or game over
        $('.options').hide();
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

  function options(){
    var decide = $('<h2 class="decide">Make Your Choice:</h3>'),
        rock = $('<button id="rock">Rock</button>'),
        paper = $('<button id="paper">Paper</button>'),
        scissors = $('<button id="scissors">Scissors</button>');

    $('.options').append(decide, rock, paper, scissors);
    user_choice();
  }

  function user_choice(){
    // Find the id of button the user clicked
    $('button').click(function(){
      var chosen = this.id;
      console.log(chosen);
      robot_choice();
    })
  }

  function robot_choice(){
    choices = ['rock', 'paper', 'scissors'];

    var choice = choices[Math.floor(Math.random()*choices.length)]; // robot chose random value from choices array
    $('.robot_decision').html("<h2>The Robot's Choice is: " + choice + "</h2>");

    var score = $('<h1 id="score">SCORE</h1>'),
        win = $('<div id="wins"><p id="keep_score">Wins <p id="count">0</p></p></div>'),
        loss = $('<div id="losses"><p id="keep_score">Losses <p id="count">0</p></p></div>'),
        draw = $('<div id="draws"><p id="keep_score">Draws <p id="count">0</p></p></div>');

    $('.score').append(score, win, loss, draw);
  }

});
