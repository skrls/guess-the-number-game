let guesses = [];

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  getRandomNumber();
};

function playGame() {
  let numberGuesse = document.getElementById("number-guess").value;

  displayResult(numberGuesse, correctNumber);
  saveGuessHistory(numberGuesse);
  displayHistory();
}

function displayResult(guess, correct) {
  if (correct > guess) {
    showNumberBelow();
  } else if (correct < guess) {
    showNumberAbove();
  } else if (correct == guess) {
    showYouWon();
  } else {
    console.log("err");
  }
}

var numberGuess = document.getElementById("number-guess");
console.log(numberGuess);

function initGame() {
  getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

var correctNumber = "";
function getRandomNumber() {
  correctNumber = Math.floor(Math.random() * 100) + 1;
  // console.log(correctNumber)
}

function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  // console.log(guesses)
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "your guessed " +
      guesses[index] +
      "</li>";
    index -= 1;
  }

  list += "</ul>";
  console.log(list);
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog

   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
  
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

// build by shakib khan
