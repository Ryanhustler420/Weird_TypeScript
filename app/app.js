"use strict";
// Interfaces
// function greet(person: any) {
//     console.log(`hello ${person.name}`);
// }
// function greet(person: { name: string }) {
//     console.log(`hello ${person.name}`);
// }
function greet(person) {
    console.log("hello " + person.firstName);
}
// function changeName(person: { name: string }) {
//     person.name = "Saurav";
// }
function changeName(person) {
    person.firstName = "Saurav";
}
var person = {
    firstName: 'Gaurav',
    age: 21
};
greet(person);
changeName(person);
greet(person);
