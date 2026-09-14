const numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.push(70);
numbers.push(80);

console.log(numbers);


const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Watermelon"];

const removed1 = fruits.pop();
const removed2 = fruits.pop();

console.log("Removed:", removed1, removed2);
console.log("Final Array:", fruits);


let cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

let removedCity = cities.shift();
cities.unshift("Coimbatore");

console.log("Removed:", removedCity);
console.log(cities);


let students = ["Arun", "Bala", "Kumar", "Priya", "Rahul"];

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});


