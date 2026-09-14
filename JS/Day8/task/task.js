let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


let students = ["Arun", "Priya", "Kiran", "Rahul", "Anu"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


let number=[10,201,30,401,50,60,70,1801]
for(i=0; i<number.length; i++){
    if (number[i]%2===0) {
        console.log(number[i]);
        
    }
}


let student = [
    { name: "Arun", mark: 75 },
    { name: "Priya", mark: 90 },
    { name: "Kiran", mark: 85 },
    { name: "Rahul", mark: 70 }
];

for(i=0; i<student.length; i++)
    if(student[i].mark > 80){
        console.log(student[i].name);
        
    }


    let add = (a,b,c)=> a+b+c
    console.log(add(10,10,30));


    let name = (name,mark)=> "student: " + name + ", marks: " + mark;
    console.log(name("arun", 100));
    
    