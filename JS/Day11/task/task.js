//task 1
function processNumber(number, callback) {
    let result = number * 2;
    callback(result);
}

function display(result) {
    console.log(result);
}

processNumber(10, display);


//task3
let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.push(70);

numbers.pop();

console.log(numbers);


//task4
let fruits = ["Mango", "Orange", "Apple"];

fruits.unshift("Banana");
fruits.shift();

console.log(fruits);


//task5
const numbers = [10, 20, 30];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i];
}

newNumbers[newNumbers.length] = 40;

console.log(newNumbers);


//task6
const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

fruits.push("Banana");
fruits.pop();

fruits.unshift("Grapes");
fruits.shift();

console.log("Length:", fruits.length);

const result = fruits.concat(vegetables);

console.log(result);