"use strict";
var Person = /** @class */ (function () {
    // public username: string [is another way to create and assigning value at the time of initalazation ]
    // constructor(name: string, type: string, public username: string) {
    function Person(name, type) {
        this.name = name;
        this.type = type;
        this.healt = 200;
    }
    Person.prototype.printAge = function () {
        console.log(this.healt);
        this.setType("CEO");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Gaurav', 'Owner');
person.printAge();
