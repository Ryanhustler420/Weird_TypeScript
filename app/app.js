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
        _this.healt = 50;
        return _this;
        // console.log(this.type) can't access!
    }
    return ThisUser;
}(Person));
var gaurav = new ThisUser();
console.log(gaurav);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species.toUpperCase();
        },
        set: function (value) {
            value.length > 3 ? this._species = value : this._species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.14; // by default value
    return Helper;
}());
console.log(Helper.PI * 2);
console.log(Helper.calcCircumference(8));
// Abstract Classes
// it may be helpfull for basic setup for any classes not this class won't instanciat 
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.clacBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        // set the login the way you want to set
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
