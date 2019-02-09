"use strict";
// string
var myName = 'Gaurav';
// myName = 28; // throw error
// number
var myAge = 27.5;
// myAge = "Gaurav"; // throw error
// boolean
var hasHobbies = false;
// hasHobbies = 1; // throw error
// assign types : any
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = ['A String'];
// tuples : like has table
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["purple"] = 4] = "purple";
    Color[Color["pink"] = 5] = "pink"; // 5
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 'M4' };
console.log(car);
function returnMyName() {
    return myName;
}
// returnMyName()
function sayHello() {
    console.log("hello Gaurav");
}
// sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 22));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 2));
