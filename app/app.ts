function logged(constructorFn: Function) {
  console.log(constructorFn);
}
@logged
class Person {
  constructor() {
    console.log('Hi');
  }
}

import 'jQuery';

$('#app').css({'background-color': 'green'});

// Translating JavaScript to TypeScript with TypeScript Definition Files
// https://github.com/DefinitelyTyped/DefinitelyTyped <= Repos

// There is a Third Party Librery which you can install in your computer -g to access all packages type incl. jquery
// npm install -g typings
// typings install dt~jquery --global --save

// `dt~jquery` , since definitelyTyped is big librery so we use just a part of it, that's why we used '~' sign
// `dt~packagename` <- as an example

// npm install --save-dev @types/jquery
// Factory

function logging(value: boolean) {
  return value ? logged : null;
}

// @logging(true)
// class Car {

// }

interface Modal {
  Honda(constructorFn: Function): void;
  BMW(constructorFn: Function): void;
}

class Engien implements Modal {
  static HONDA_VERSION_NO: string = '123456';

  // Function decorator can be inside any class and can be used as friend function
  // to pass data from one object to another
  // decorators
  public Honda(constructorFn: Function) {
    // asigning properties to current object
    constructorFn.prototype.assignDetail = function() {
      this.VERSION_NO = Engien.HONDA_VERSION_NO;
      this.COMPANY = 'Honda';
    };

    constructorFn.prototype.test = function() {
      console.log('trigger');
    };

    constructorFn.prototype.print = function() {
      this.assignDetail();
      console.log(this);
    };
  }

  public BMW(constructorFn: Function) {
    constructorFn.prototype.print = function() {
      console.log(this);
    };
  }
}

// Advanced
function printable(constructorFn: Function) {
  // this function will reciev entire class with constructor function any you can add
  // any function you like in its prototype and than use this as `@printable` keyword above the class keyword
  // as shown below
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

const en = new Engien();

// @logging(true)
@en.Honda
class Plant {
  name = 'Green Plant';
}

// Parameter Decorator

function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramsIndex: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Maths');
course.printStudentNumber('Anythhing', true);
course.printStudentNumber('Anythhing', false);

// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
}

class Project {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calcBudget();
// project.calcBudget = function () {
//     console.log(2000);
// }
project.calcBudget();
console.log(project);

const plant = new Plant();
(<any>plant).print(); // here we are calling that function
(<any>plant).test(); // here we are calling that function

// tsc -W FOR continued watching

interface Credentials {
  FirstName?: string;
  LastName?: string;
  username?: string;
  password?: string | number;
  confirmPassword?: string | number;
  email?: string;
  phoneNumber?: string | number;
}

interface VirtualAuth {
  passwordMustBeString(): this;
  passwordLengthMustBeGraterThan(minLength: number): this;
  passwordLengthMustBeLessThan(maxLength: number): this;
  done(cb: Function): Function;
  basicCheck(): void | 0;
  AverageCheck(): void | 0;
  AdvanceCheck(): void | 0;
}

class Auth implements VirtualAuth {
  private _userData: Credentials = {};
  private calls: boolean[] = [];
  check(credential: Credentials) {
    this._userData = credential;
    this.calls.push(true);
    return this;
  }
  passwordMustBeString() {
    if (typeof this._userData.password === 'string') {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }
  passwordLengthMustBeGraterThan(minLength: number) {
    if (
      this._userData.password != undefined &&
      this._userData.password.toString().length > minLength
    ) {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }
  passwordLengthMustBeLessThan(maxLength: number) {
    if (
      this._userData.password != undefined &&
      this._userData.password.toString().length < maxLength
    ) {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }

  isFalse(el: boolean) {
    return el === false;
  }

  passwordShouldMatch() {
    if (this._userData.password === this._userData.confirmPassword) {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }

  usernameLengthMustBeGraterThan(minLength: number) {
    if (
      this._userData.username != undefined &&
      this._userData.username.length > minLength
    ) {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }

  usernameLengthMustBeLessThan(maxLength: number) {
    if (
      this._userData.username != undefined &&
      this._userData.username.length < maxLength
    ) {
      this.calls.push(true);
    } else {
      this.calls.push(false);
    }
    return this;
  }

  done(cb: Function): Function {
    if (!this.calls.some(this.isFalse)) {
      return cb(null, this._userData);
    } else {
      return cb('Error', null);
    }
  }

  basicCheck() {}

  AverageCheck() {}

  AdvanceCheck() {}
}

type str_OR_null = string | null;

const userCredential: Credentials = {
  FirstName: 'Gaurav',
  LastName: 'Gupta',
  email: 'gouravgupta840@gmail.com',
  password: '983571',
  confirmPassword: '983571',
  phoneNumber: '983571',
  username: 'Gauravsagro',
};

new Auth()
  .check(userCredential)
  .passwordMustBeString()
  .passwordLengthMustBeGraterThan(5)
  .passwordLengthMustBeLessThan(10)
  .done((err: str_OR_null, success: str_OR_null) => {
    console.log(err, success);
  });
// password Match With
// usernameLengthMustBeGraterThan
// usernameLengthMustBeLessThan(10)
//  must be valid email

// let second = new Auth();
// console.log(first===second);

// database
// authentication

// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data

// npm install --save jquery

//  If the tsconfig.json is lives other than your root directory than you can use
//  tsc -project config/tsconfig.json
//  tsc -project ./config/tsconfig.json
//  Or
//  tsc -p config/tsconfig.json
