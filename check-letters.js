// prototype for printing correct letters upon correct guess or showing ~ if not
Letter.prototype.printLetter = function() {
  if (this.show) {
    return this.letter;
  } else {
    return "~";
  }
};

// function to get letter choice and compare to blank
function Letter(letter) {
  this.letter = letter;
  if (this.letter == " ") {
    this.show = true;
  } else {
    this.show = false;
  }
}

// export constructor "Letter"
module.exports = Letter;
