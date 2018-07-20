var name = prompt("What's your name?");
console.log("Hello " + name);

//list of words:
//Gevald
//Schmaltz
//Schmuck
//Meshugeh

var words = [
    'Gevald',
    'Schmaltz',
    'Schmuck',
    'Meshugeh',
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
}
// alert(answerArray.join(" "));
//  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//  if (guess === null) {
//  break;
// } else if (guess.length !== 1) {
//  alert("Please enter a single letter.");
// } else {
//  // Update the game state with the guess
// }
// for (var j = 0; j < word.length; j++) {
//      if (word[j] === guess) {
//      answerArray[j] = guess;
//      remainingLetters--;
//      }
//     }
