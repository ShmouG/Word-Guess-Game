// document.getElementById("word-guess").addEventListener("keypress", myFunction);

// function myFunction() {
//     document.getElementById("word-guess")
// }

// alert("Press ok to continue")
// alert("You have 10 chances to prove yourself worthy")

//words used in the game
var words = ['gevald', 'schmaltz', 'schmuck', 'meshugeh'];
var randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
var guesses = 10;
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = " _ ";
}
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var wrongGuess = [];
var wins = 0;
var loses = 0;
var answerString = "";
for (var i = 0; i < answerArray.length; i++) {
    answerString += answerArray[i];
}

console.log(randomWord);

document.getElementById("answer").innerHTML = answerString;


var remainingLetters = randomWord.length;

document.onkeyup = function (event) {
    // console.log(event.key)
    var guess = event.key.toUpperCase();
    if (alphabet.indexOf(guess) == -1) {
        return;
    }

    if (answerArray.indexOf(guess) > -1) {
        console.log('Letter already correctly guessed');
        return;
    } else if (wrongGuess.indexOf(guess) > -1) {
        console.log('already guessed');
        return;
        //   alert('Wrong, try again!');
    } else if (randomWord.indexOf(guess) == -1) {
        wrongGuess.push(guess);
        guesses--;
        console.log('wrong guess');

    } else {
        console.log("in the else");
        for (var j = 0; j < randomWord.length; j++) {

            if (randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters = remainingLetters - 1;
                console.log('MAATCHING!!!')
                //document.getElementById("answer").innerHTML = answerArray.join(" ");

                console.log(answerArray);
                console.log(remainingLetters);

                // if they have the whole
            }

        }
    }

    var answerString = "";
    for (var i = 0; i < answerArray.length; i++) {
        answerString += answerArray[i];
    }

    if (randomWord == answerString) {
        console.log("You got it!");
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;

    }
    if (guesses == 0) {
        console.log('Game Over!')
        loses++
        document.getElementById("loses").innerHTML = "Loses: " + loses;

    }

    document.getElementById("counter").innerHTML = "Number of clicks " + guesses;
    console.log("answerstring", answerString);
    document.getElementById("answer").innerHTML = answerString;

    console.log("guesses")


}

// function startUp() {
// for (var i = 0; i < randomWord.length; i++) {
// answerArray.push("_ ");
// }
//    s = answerArray.join(" ");
//    document.getElementById("answer").innerHTML = s;
// }

// function Letter(){
//     alert("dnfdkjnfkjw")
//     var letter = document.getElementById("letter").value;
// {
//   if (letter.length > 0){
//       for (var i = 0; i < randomWord.length; i++)
//       {
//           if(randomWord[i] === letter)
//           {
//                 answerArray[i] = letter;
//           }
//       }
//     }
//       guesses++;
//       document.getElementById("counter").innerHTML = "Number of clicks " + guesses;
//       document.getElementById("answer").innerHTML = answerArray.join("_");
//   }

//   }
// }


// alert("Good job! The answer was " + randomWord);


// if (guesses > 10) {
//     document.getElementById("stat").innerHTML = "Oy Vey!!!"


//if too many wrong guesses
//print on page



// while (remainingLetters > 0) {
// Game code goes here
// Show the player their progress
// Take input from the player
// Update answerArray and remainingLetters for every correct guess
// }
// alert(answerArray.join(" "));
//  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//  if (guess === null) {
//  break;
// } else if (guess.length !== 1) {
//  alert("Please enter a single letter.");
// } else {
// Update the game state with the guess
// }
















// var name = prompt("What's your name?");
// console.log("Hello " + name);

// // Create an array of words
// var words = [
//         'gevald',
//         'schmaltz',         
//         'schmuck',
//         'meshugeh',
//     ];
//     // Pick a random word
//     var word = words[Math.floor(Math.random() * words.length)];
//     // Set up the answer array
//     var answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//     }
//     var remainingLetters = word.length;
//     // The game loop
//     while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing");
//     if (guess === null) {
//     // Exit the game loop
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//     answerArray[j] = guess;
//     remainingLetters--;
//     }
//     }
//     }
//  // The end of the game loop
// }
// // Show the answer and congratulate the player
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word)