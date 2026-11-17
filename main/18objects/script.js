let student = {
    name: "Naruto",
    age: 18,
    city: "Konoha",
    marks: 95
};
student.marks=90;
console.log(student);
console.log(student["name"]);
console.log(student["age"]);

let student = {
    name: "Naruto",
    age: 18,
    marks: 95
};

console.log(Object.keys(student));