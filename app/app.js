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
console.log(betterEcho('Gaurav'));
console.log(betterEcho(27));
console.log(betterEcho({ name: "Gaurav", age: 27 }));
