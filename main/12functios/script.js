let name1=prompt("enter your name : ");
let marks=prompt("Enter your marks : ");

function showStudentResult(){
    console.log("Student Name: " + name1);
    console.log("Marks: " + marks);

    if (marks >= 40) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}
showStudentResult();