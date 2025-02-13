// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const floatNumberOne = parseFloat(numberOne);
const floatNumberTwo = parseFloat(numberTwo);

console.log(floatNumberOne +  floatNumberTwo);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

const formattedTotal = total.toFixed(2);

console.log(formattedTotal);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three;

const sumAverage = sum / 3;
const sumAverageFormatted = sumAverage.toFixed(5);

console.log(sumAverageFormatted);


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const lettersIndexTwo = letters[2];

console.log(lettersIndexTwo);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const updatedFact = fact.replace("javascript!", "Javascript!");

console.log(updatedFact);

// --------------------------------------



