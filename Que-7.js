//Assignmet 07

let olddata = localStorage.getItem("StudList");
let StudentList =olddata ?  JSON.parse(olddata) : [];  // we can retieve data again in oject form.
function std(){
let student = {
    name :  prompt("Enter any name"),
    rollNo :+prompt("Enter roll no"),
    CNIC  :+prompt("Enter cnic no"),
}
 StudentList.push(student);
console.log(StudentList);
let stringify = JSON.stringify(StudentList);
localStorage.setItem("StudList",stringify );
}