const student = {
    name: "Nitin",
    age: 32,
    marks: 81,
    city: "Gurgaon"
};

//Change city to Mumbai
student.city = "Mumbai";
console.log(student);

//Add new property
student.gender = "Female";
console.log(student);

//Change marks to "A"
student.marks = "A";
console.log(student);

//Delete
delete student.age;
console.log(student);