/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

// its like alice
import CircleMath = MyMath.Circle;

const PI = 2.23232;

console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.Circle.calculateCircumference(20));
console.log(CircleMath.calculateCircumference(20));
console.log(PI);

// Run this command
// tsc .\app.ts --outFile .\app.js