// GLOBAL VARIABLES
// =================================================================

// Sale item Variables
var saleItem = {
  shorts: {
    name: "shorts",
    value: 0
  },
  heels: {
    name: "heels",
    value: 0
  },
  swimsuit: {
    name: "swimsuit",
    value: 0
  },
  dress: {
    name: "dress",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Function for getting random numbers with range parameters
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function () {

  // Reset the Current Score
  currentScore = 0;
  

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the sales items (between 1 and 12)
  saleItem.shorts.value = getRandom(1, 12);
  saleItem.heels.value = getRandom(1, 12);
  saleItem.swimsuit.value = getRandom(1, 12);
  saleItem.dress.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#spent").text(currentScore);
  $("#random-num").text(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("shorts: " + saleItem.shorts.value + " | swimsuit: " + saleItem.swimsuit.value + " | heels: " + saleItem.heels.value +
    " | dress: " + saleItem.dress.value);
  console.log("-----------------------------------");

  // // Changes status to Buy something
  // $("#status").text("Buy somthing...");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function () {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    $("#status").text("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#losses").text(lossCount);

    // Restart the game
    startGame();
  } else if (currentScore === targetScore) {
    $("#status").text("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#wins").text(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the saleItems
var addValues = function (clickedsaleItem) {

  // Change currentScore
  currentScore += clickedsaleItem.value;

  // Change the HTML to reflect changes in currentScore
  $("#spent").text(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#shorts").click(function () {
  addValues(saleItem.shorts);
});

$("#heels").click(function () {
  addValues(saleItem.heels);
});

$("#swimsuit").click(function () {
  addValues(saleItem.swimsuit);
});

$("#dress").click(function () {
  addValues(saleItem.dress);
});