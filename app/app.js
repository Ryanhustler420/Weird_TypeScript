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
    age: 21,
    hobbies: ['Cooking', 'Sports']
};
// greet({ firstName: 'Gaurav', age: 27 }); // this will check if you pass object literal directly. this will throw error
greet({ firstName: 'Gaurav', age: 27 }); // this is possible if you put optional property in NamedPerson interface using ? mark
greet({ firstName: 'Gaurav' });
changeName(person);
greet(person);
