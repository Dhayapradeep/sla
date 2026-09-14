function add(a, b) {
    return a + b;
}

console.log(add(10, 20));



function printEven(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEven(20);



let factorial = n => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(5));



var globalName = "Arun";

function student() {
    var functionName = "Priya";

    console.log(globalName);
    console.log(functionName);

    if (true) {
        let blockName = "Kiran";
        const blockAge = 21;

        console.log(blockName);
        console.log(blockAge);
    }
}

student();

console.log(globalName);



console.log(a);

var a = 10;

console.log(b);

let b = 20;


console.log(c);

const c = 30;