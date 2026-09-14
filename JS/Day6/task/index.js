let result = "";

for (let i = 1; i <= 20; i++) {
    result = result + i + " ";
}

console.log(result);


let result = "";

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        result = result + i + " ";
    }
}

console.log(result);


let result = "";

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        result = result + i + " ";
    }
}

console.log(result);


let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum = sum + i;
}

console.log(sum);


let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}

console.log(sum);


let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Even Count:", count);



