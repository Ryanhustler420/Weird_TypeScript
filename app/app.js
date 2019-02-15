"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory 
function logging(value) {
    return value ? logged : null;
}
var Engien = /** @class */ (function () {
    function Engien() {
    }
    // Function decorator can be inside any class and can be used as friend function
    // to pass data from one object to another
    // decorators
    Engien.prototype.Honda = function (constructorFn) {
        // asigning properties to current object
        constructorFn.prototype.assignDetail = function () {
            this.VERSION_NO = Engien.HONDA_VERSION_NO;
            this.COMPANY = "Honda";
        };
        constructorFn.prototype.test = function () {
            console.log('trigger');
        };
        constructorFn.prototype.print = function () {
            this.assignDetail();
            console.log(this);
        };
    };
    Engien.prototype.BMW = function (constructorFn) {
        constructorFn.prototype.print = function () {
            console.log(this);
        };
    };
    Engien.HONDA_VERSION_NO = '123456';
    return Engien;
}());
// Advanced
function printable(constructorFn) {
    // this function will reciev entire class with constructor function any you can add
    // any function you like in its prototype and than use this as `@printable` keyword above the class keyword
    // as shown below
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var en = new Engien();
// @logging(true)
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        en.Honda
    ], Plant);
    return Plant;
}());
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
var plant = new Plant();
plant.print(); // here we are calling that function
plant.test(); // here we are calling that function
var Auth = /** @class */ (function () {
    function Auth() {
        this._userData = {};
        this.calls = [];
    }
    Auth.prototype.check = function (credential) {
        this._userData = credential;
        this.calls.push(true);
        return this;
    };
    Auth.prototype.passwordMustBeString = function () {
        if (typeof this._userData.password === 'string') {
            this.calls.push(true);
        }
        else {
            this.calls.push(false);
        }
        return this;
    };
    Auth.prototype.passwordLengthMustBeGraterThan = function (minLength) {
        if (this._userData.password != undefined && (this._userData.password.toString().length > minLength)) {
            this.calls.push(true);
        }
        else {
            this.calls.push(false);
        }
        return this;
    };
    Auth.prototype.passwordLengthMustBeLessThan = function (maxLength) {
        if (this._userData.password != undefined && (this._userData.password.toString().length < maxLength)) {
            this.calls.push(true);
        }
        else {
            this.calls.push(false);
        }
        return this;
    };
    Auth.prototype.isFalse = function (el) {
        return el === false;
    };
    Auth.prototype.done = function (cb) {
        if (!this.calls.some(this.isFalse)) {
            return cb(null, this._userData);
        }
        else {
            return cb('Error', null);
        }
    };
    Auth.prototype.basicCheck = function () {
    };
    Auth.prototype.AverageCheck = function () {
    };
    Auth.prototype.AdvanceCheck = function () {
    };
    return Auth;
}());
var userCredential = {
    FirstName: 'Gaurav',
    LastName: 'Gupta',
    email: 'gouravgupta840@gmail.com',
    password: "983571",
    confirmPassword: '983571',
    phoneNumber: '983571',
    username: 'Gauravsagro'
};
new Auth()
    .check(userCredential)
    .passwordMustBeString()
    .passwordLengthMustBeGraterThan(5)
    .passwordLengthMustBeLessThan(10)
    .done(function (err, success) {
    console.log(err, success);
});
// let second = new Auth();
// console.log(first===second);
// database
// authentication
// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data
