"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Gaurav'));
// console.log(echo(27).length); //will throw error because number does'nt have length property
console.log(echo(27));
console.log(echo({ name: "Gaurav", age: 27 }));
// Generic make code very flexible and dynamic
// Better Generic 
function betterEcho(data) {
    return data;
}
// console.log(betterEcho<string>('Gaurav'));
// console.log(betterEcho<number>(27));
// console.log(betterEcho<Object>({ name: "Gaurav", age: 27 }))
console.log(betterEcho('Gaurav').length);
// console.log(betterEcho(27).length); // throw error
console.log(betterEcho({ name: "Gaurav", age: 27 }));
// Build-in Generics
var testResult = [1.94, 2.33];
testResult.push(-2.99);
// testResult.push("String") // wrong
console.log(testResult);
// Arrays
function printALl(args) {
    args.forEach(console.log);
}
printALl(['Apple', 'Banana']);
printALl(['Apple', 'Banana']);
var echo2 = betterEcho; // betterEcho function signature fits in this type that why we can assign that function into it
console.log(echo2('Something'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
// const simpleMath = new SimpleMath();
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
// simpleMath.baseValue = '10'; throw error
simpleMath.multiplyValue = 30;
console.log(simpleMath.calculate());
