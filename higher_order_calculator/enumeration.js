const numbers = [1, 2, 3, 4, 5];

const doubleUpNumber = (number) => {
    console.log(number * 2);
}

for(number of numbers){
doubleUpNumbers(number);

}

numbers.forEach(doubledNumbers);

anotherSetOfNumbers.forEach(doubledNumbers)

//Mapping
Mapping

const doubledNumbers = numbers.map( (number) => {
    return number * 2;
})

console.log(doubledNumbers);
console.log(numbers);

//Filtering

const evenNumbers = numbers.filter(number=> number % 2 === 0)
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });

console.log(evenNumbers);

//.map(), .filter(), .forEach(), .every() (if condition is true for every element), .any(), .find()

//Reduce

const total = numbers.reduce((reducer, number) => {
    return reducer + number;
}, 10);

console.log(total);

