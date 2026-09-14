let fruits=["apple", "banana", "berry", "gauva", "orange"]
for(i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

let student = {
    name: "Arun",
    age: 21,
    course: "Generative AI",
    mark: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);

let students = [
    { name: "Arun", mark: 85 },
    { name: "Priya", mark: 90 },
    { name: "Kiran", mark: 78 }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].mark);
}


let employee=[{name: "arun", salary:10000},{name: "ari", salary:90000},{name: "arjun", salary:80000},{name: "varun", salary:70000},{name: "tarun", salary:60000},{name: "sarjun", salary:1000}]
for (i=0; i<employee.length;i++){
    if(employee[i].salary > 40000)
        console.log(employee[i].name, employee[i].salary);
    
}