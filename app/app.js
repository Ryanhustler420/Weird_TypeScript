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
