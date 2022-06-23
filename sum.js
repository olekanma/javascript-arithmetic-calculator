// choose options
const operators =prompt("enter an option: +, -, /, *, % ");

// store numbers
const num1 = parseInt(prompt("enter the first number "));
const num2 = parseInt(prompt("enter the second number "));

let answer;

if (operators == "+") {
answer = num1 + num2;


} else if (operators == "-") {
answer = num1 - num2;

} else if (operators == "/") {
answer = num1 / num2;

} else if (operators == "*") {
answer = num1 * num2;

} else {
answer = num1 % num2;
  }

//display answer
 window.alert( answer);
