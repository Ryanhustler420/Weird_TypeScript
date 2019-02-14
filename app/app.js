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
// tsc -W FOR continued watching
var Auth = /** @class */ (function () {
    function Auth() {
        this.url = {
            username: '',
            password: ''
        };
        this.calls = [];
    }
    Auth.prototype.check = function (username, password) {
        this.url.username = username;
        this.url.password = password;
        this.calls.push(true);
        return this;
    };
    Auth.prototype.passwordMustBeString = function () {
        if (typeof this.url.password === 'string') {
            this.calls.push(true);
        }
        else {
            this.calls.push(false);
        }
        return this;
    };
    Auth.prototype.passwordMustBeGraterThan = function (minLength) {
        if (this.url.password.length > minLength) {
            this.calls.push(true);
        }
        else {
            this.calls.push(false);
        }
        return this;
    };
    Auth.prototype.passwordMustBeLessThan = function (maxLength) {
        if (this.url.password.length < maxLength) {
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
            return cb(null, 'All Ok');
        }
        else {
            return cb('Error', null);
        }
    };
    return Auth;
}());
new Auth()
    .check('gaurav', '123456')
    .passwordMustBeString()
    .passwordMustBeGraterThan(6)
    .passwordMustBeLessThan(10)
    .done(function (err, success) {
    console.log(err, success);
});
// let second = new Auth();
// console.log(first===second);
// database
// authentication
// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data
