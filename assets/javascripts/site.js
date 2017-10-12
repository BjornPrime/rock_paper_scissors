function playRPS(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerPlay = choices[Math.floor(3*Math.random())];

  if (playerChoice == computerPlay) {
    result = "It's a tie.";
  } else if (playerChoice == "rock") {
    if (computerPlay == 'paper') {
      result = 'Computer wins';
    } else {result = 'You win!'};
  } else if (playerChoice =="paper") {
    if (computerPlay == 'scissors') {
      result = 'Computer wins';
    } else {result = 'You win!'};
  } else if (playerChoice == "scissors") {
    if (computerPlay == 'rock') {
      result = 'Computer wins';
    } else {result = 'You win!'};
  }

  $('#player_choice').html(`You have chosen ${playerChoice}`);
  $('#computer_choice').html(`Computer chooses ${computerPlay}`);
  $('#result').html(`${result}`);

}


$("#rock_img").click(function() {playRPS("rock")});
// $("#rock").click(function() {
//   $('h1').html("Rock");
//   });
$("#paper_img").click(function() {playRPS("paper")});
$("#scissors_img").click(function() {playRPS("scissors")});
