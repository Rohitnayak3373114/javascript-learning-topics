//string,boolean,number,undefined,null,symbol//
let id1=Symbol("id");
let id2=Symbol("id");

console.log(id1===id2);//they have unique value//

let value=true;//boolean//


//Non primitive data types //
//objects//
let student = {
    name: "Naruto",
    age: 20,
    course: "Computer Science"
};

console.log(student);

//arrays//
let subjects = [
    "Maths",
    "Physics",
    "Chemistry",
    "JavaScript"
];

console.log(subjects);
console.log("on index 2:",subjects[2]);
console.log(typeof subjects);


//functions//
function greet() {
    console.log("Hello Naruto!");
}

greet();