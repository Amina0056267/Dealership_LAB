const numbers = [10, 20, 30 ,40 ,50];
const cloneNumbers = [...numbers];

// const ten = numbers[0];
// const twenty = numbers [1];

const [ten, twenty, ...stuff] = numbers;

console.log(ten, twenty);
console.log(stuff);

const myObject = {
    a: 10,
    b: 20
}
let a, b;

({a, b} = myObject);
console.log(a, b);

const props = [
    {id: 1, name: 'Fizz'},
    {id: 2, name: 'Buzz'},
    {id: 3, name: 'FizzBuzz'},

];
const [{name}, props2, props3] = props;
console.log(name);