//even numbers from 1 to 50

let result = "";

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        result += i + " ";
    }
}

console.log(result);


//factorial using while
let number = 5;
let factorial = 1;
let i = 1;

while (i <= number) {
    factorial = factorial * i;
    i++;
}

console.log(factorial);


//reverse string
let text = "JavaScript";
let reverse = "";

for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
}

console.log(reverse);


//highest number
const numbers = [45, 12, 89, 34, 67, 90, 23];

let highest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

console.log("Highest:", highest);


//odd numbers total
const numbers = [10, 15, 20, 25, 30, 35, 40];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
        total += numbers[i];
    }
}

console.log("Total:", total);


//object
const student = {
    name: "Ravi",
    age: 22,
    course: "JavaScript",
    mark: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);


//student marks more than 75
const students = [
    { name: "Arun", mark: 85 },
    { name: "Bala", mark: 65 },
    { name: "Charan", mark: 90 },
    { name: "Deepak", mark: 70 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 75) {
        console.log(students[i].name, students[i].mark);
    }
}


//3 types of function
//normal functon
function square(n) {
    return n * n;
}

console.log(square(5));

//arrow function
const squareArrow = n => n * n;

console.log(squareArrow(5));

//expression
const squareExpression = function(n) {
    return n * n;
};

console.log(squareExpression(5));


//template literal
function studentDetails(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(studentDetails("Ravi", 25));


//var, let, const block scope
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);


