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
// only assign function which takes two parameter of type number and number and returns number
var myMultiply;
// myMultiply = sayHello;
// myMultiply(); // throw error because of the function signature
myMultiply = multiply;
console.log(myMultiply(2, 2));
// Objects
var userData = {
    name: 'Gaurav',
    age: 21,
};
// userData = {}; // throw error beacuse this object must have a number field and age field or property
// this is also not valid because the propert has different name 
// 'a' must be name
// 'b' must be age
// userData = { 
//     a: "hello",
//     b: 22
// };
// this is type defination and not value
// { name: string, age: number }
var newUserData = {
    name: "Gaurav",
    age: 27
};
newUserData = {
    name: 'gaurav',
    age: 23
};
// Complex Object Example
var complex = {
    data: [100, 200, 300, 400],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 200, 300, 400],
    output: function (all) {
        return this.data;
    }
};
// union type
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = boolean; // will throw error
// check types on run time
var finalValue = 3;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never type which function never complete that where we use never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12; // throw an Error coz this will be null only
var isItNull = 12;
// isItNull = null; // this will throw an error because tsconfig.ts has permission to not allow different data type to overwrite
