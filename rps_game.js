$(document).ready(function(){
  // set the time to zero:
  $('.time_holder').text("Minutes: " + 0 + " Seconds: " + 0);

  // ***MAKE A FUNCTION: set the score for each outcome to zero & append them to .score
  winner = 0;
  loser = 0;
  drawer = 0;

  var score = $('<h1 id="score">SCORE</h1>'),
      win = $('<div id="wins"><p id="keep_score">Wins <p id="count_win">'+ winner + '</p></p></div>'),
      loss = $('<div id="losses"><p id="keep_score">Losses <p id="count_lose">' + loser + '</p></p></div>'),
      draw = $('<div id="draws"><p id="keep_score">Draws <p id="count_draw">' + drawer + '</p></p></div>');

    $('.score').append(score, win, loss, draw);

  // User input time, .click is triggered
  $('#play_game').click(function(){
    options(); // get the choice of the user
    play_game();
  });

  function play_game(){
    min = $('#mins').val();
    sec = $('#secs').val();

    clock = setInterval(getTime, 1000);

    function getTime(){
      sec -= 1; // decrease the seconds

      // Warn if 10 seconds remaining
      if(sec == 10 && min == 0){
         $('.warning').text("10 SECONDS REMAINING!").show();
      }

      if(sec <= 0){ // No more Seconds...
        if (min >= 1) { // more mins so add 59 seconds
          sec = 59;
          min -= 1;
        }
        else{// no more time left
          clearInterval(clock);

          $('.warning').hide(); // hide warning once countdown complete
          // Hide options div when times up or game over
          $('.options').hide();
          $('.robot_decision').hide();

          // decide if who won, who lost
          if(winner > loser){
            $('.who_won').append("You Won!").show();
          }
          else {
            $('.who_won').append("Robot Won!").show();
          }

          // Restart function to start the game again
          go_play();
        }
      }
      else if(min == ''){ // if user did not input min, set to zero
        min = 0;
      }

      $('.time_holder').text("Minutes: " + min + " Seconds: " + sec);
    }

  }

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
      user_chosen = this.id;
      robot_choice();
    })
  }

  function robot_choice(){
    var choices = ['rock', 'paper', 'scissors'];

    robot_chosen = choices[Math.floor(Math.random()*choices.length)]; // robot chose random value from choices array
    $('.robot_decision').html("<h2>The Robot's Choice is: " + robot_chosen + "</h2>");

    game_score();
  }

  function game_score(){
    // how to win: rock beats scissors, scissors beats paper, paper beats rock
    // how to draw: the same thing is chosen by each player
    if((user_chosen == 'rock' && robot_chosen == 'scissors') ||
        (user_chosen == 'scissors' && robot_chosen == 'paper') ||
        (user_chosen == 'paper' && robot_chosen == 'rock')){

      winner++;
      $('#count_win').text(winner);
    }
    else if ((user_chosen == 'scissors' && robot_chosen == 'rock') ||
        (user_chosen == 'paper' && robot_chosen == 'scissors') ||
        (user_chosen == 'rock') && robot_chosen == 'paper') {

        loser++;
        $('#count_lose').text(loser);
    }
    else{
      // draw
      drawer++;
      $('#count_draw').text(drawer);
    }
  }

  function go_play(){
    $('.restart_game').html("<button class='restart'>Restart Game</button>").show();

    $('.restart').click(function(){
      $('.restart_game').hide();
      $('.who_won').hide();

      $('.options').show();
      $('.robot_decision').show();

      winner = 0;
      loser = 0;
      drawer = 0;
      $('#count_win').text(winner);
      $('#count_lose').text(loser);
      $('#count_draw').text(drawer);
      play_game();
    })
  }
});
