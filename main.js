// game logic goes in this file

var checkLetters = require("./check-letters.js");
var gameplay = require("./game.js");
var wordList = require("./word.js");
var inquirer = require("inquirer");

// start game and get ready for user input
// decide if letter picked is correct + win or lose game functions
function userGuess() {
  console.log(newWord.print());
  inquirer.prompt([{
    name: "letter",
    type: "text",
    message: "Select any ONE letter, please:",
    // make sure only one letter is picked and that only letters are used
    validate: function(string) {
      var regEx = new RegExp("^[a-zA-Z]{1,1}$");
      if (regEx.test(string)) {
        return true;
      } else {
        return false,
        console.log("Caught ya! You can only pick ONE letter, cheater!");
      }
    }
// gameplay with mistake messages and prompts
  }]).then(function(user) {
    console.log("---------------------------------------------");
    var letter = user.letter;
    newWord.checkLetter(letter);
    if (newWord.isLetterValid) {
      console.log("Nope. You've already guessed that letter, sucka! Pick again.");
      userGuess();
    } else {
        if (newWord.isComplete()) {
          console.log("NAILED IT! Winner winner chicken dinner! " + newWord.chosenWord + " was the word!");
          playAgain();
        } else if (newWord.trysLeft === 0) {
          console.log("Loser. You're all out of guesses. The word was: " + newWord.chosenWord);
          playAgain();
        } else {
          console.log("Better figure it out quick... you have only " + newWord.trysLEft + " left! #sad");
          userGuess();
        }
    }
  });
}

// playAgain function and messaging // I messed something up here big time I think...
function playAgain() {
  inquirer.prompt([{
    type: "input",
    message: "If you'd like to play again, enter 'y' for Yes or 'n' to give up like a lil b#tch."),
    name: "playAgain"
  }]).then(function(user) {
    var answer = user.playAgain;
    if (answer == "y") {
      game.userPrompt(function() {
        newWord = new word.Word(game.chosenWord);
        userGuess();
      });
    } else if (answer === "n") {
      console.log("Wow. You gave up pretty easily. What kind of person does that?!");
      return;
    }
  })
}
game.userPrompt(function() {
  newWord = new word.Word(game.chosenWord);
  userGuess();
});
