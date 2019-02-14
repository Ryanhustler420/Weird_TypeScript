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
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi I am " + this.firstName + " " + lastName);
    }
};
greet(person);
// greet({ firstName: 'Gaurav', age: 27 }); // this will check if you pass object literal directly. this will throw error
// greet({ firstName: 'Gaurav', age: 27 }); // this is possible if you put optional property in NamedPerson interface using ? mark
// greet({ firstName: 'Gaurav' });
changeName(person);
greet(person);
person.greet('Everyone');
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Ram";
greet(myPerson);
myPerson.greet('Everyone');
