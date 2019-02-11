"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Inheritance
var ThisUser = /** @class */ (function (_super) {
    __extends(ThisUser, _super);
    function ThisUser() {
        var _this = _super.call(this, name, 'Employee') || this;
        _this.name = "Gaurav";
        return _this;
    }
    return ThisUser;
}(Person));
var gaurav = new ThisUser();
console.log(gaurav);
