"use strict";
var Person = /** @class */ (function () {
    // public username: string [is another way to create and assigning value at the time of initalazation ]
    // constructor(name: string, type: string, public username: string) {
    function Person(name, type) {
        this.name = name;
        this.type = type;
        this.healt = 100;
    }
    return Person;
}());
var person = new Person('Gaurav', 'Owner');
console.log(person);
