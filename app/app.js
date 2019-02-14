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
var Auth = /** @class */ (function () {
    function Auth() {
        if (Auth.instance) {
            return Auth.instance;
        }
        Auth.instance = this;
    }
    Auth.prototype.request = function (url) {
        Auth.url = url;
        return this;
    };
    Auth.prototype.check = function (username, password, cb) {
        return cb(true, true);
    };
    return Auth;
}());
var auth = new Auth();
auth.request('api/user/auth')
    .check('gaurav', '123456', function (err, success) {
    if (err) {
        return console.log('Error');
    }
    console.log('Auth Successfully Completed');
});
// let second = new Auth();
// console.log(first===second);
// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data
