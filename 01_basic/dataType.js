// We Have Several Type of Data Type of JS:

// string => "HammadSaeed";
// number => 123425345;
// bigInt => 902837452938475920834759284357234;
// boolean => true or false;
// symbol => when we need unique value;
// null => standalne value mean empty;
// undefined => when we dont define the value of variable;

// Not Premetive Type

// Object
// Array
// function

// There is difference between primitive and non-premitive stack and heap memory allocation
// In stack we get the copy or actual value but in heap we get the reference of actual value
// For Example of Stack :
// In stack we assign new value but we dont modify the directly for example
let isName = "Hammad";
let myName = isName;
// console.log(isName);
// console.log(myName);
// expected output :
// Hammad
// Hammad
// but if we try to change the value of myName then
myName = "Hammad Saeed";

console.log(isName);
console.log(myName);
// expected Output
// Hammad
// Hammad Saeed
// The value of isName cannot change because in myName we get the copy of isName not real value

// But in heap we get the refernce of actual value like

// let myObj = {
//   name: "hammad",
//   age: 13,
// };

// let myObj1 = myObj;

// myObj1.age = 34;

// console.log(myObj);
