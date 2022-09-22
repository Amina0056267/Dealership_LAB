// const sum =( number1, number2) => {
//     console.log(number1 + number2);
// }

// const subract =( number1, number2) => {
//     console.log(number1 - number2);
// }

// // doCalculation is a higher order function
// // the function to be passed in is called a callback
const doCalculation = (number1, number2, callback) => {
    callback(number1, number2)
}
  
// }

// doCalculation(9, 6, "subtract");

// doCalculation(109, 234,"sum");

//Declaring callbacks inline

doCalculation(432, 543, (number1, number2) => {
    console.log(number1 * number2);
});