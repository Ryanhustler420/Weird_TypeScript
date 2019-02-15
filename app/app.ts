function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class Person {
    constructor() {
        console.log('Hi')
    }
}


// Factory 


function logging(value: boolean) {
    return value ? logged : null;
}

// @logging(true)
// class Car {

// }

class Engien {
    static VERSION_NO: string = '123456';

    // Function decorator can be inside any class and can be used as friend function
    // to pass data from one object to another
    public getVersion(constructorFn: Function) {
        constructorFn.prototype.print = function () {
            this.VERSION_NO = Engien.VERSION_NO;
            console.log(this);
        }
    }

}


// Advanced
function printable(constructorFn: Function) {
    // this function will reciev entire class with constructor function any you can add
    // any function you like in its prototype and than use this as `@printable` keyword above the class keyword
    // as shown below
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

const en = new Engien();

@en.getVersion
class Plant {
    name = "Green Plant"
}

const plant = new Plant();
(<any>plant).print();


// tsc -W FOR continued watching

interface Credentials {
    FirstName?: string,
    LastName?: string,
    username?: string,
    password?: string | number,
    confirmPassword?: string | number,
    email?: string,
    phoneNumber?: string | number
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

    private _userData: Credentials = {}
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
        if (this._userData.password != undefined && (this._userData.password.toString().length > minLength)) {
            this.calls.push(true);
        } else {
            this.calls.push(false);
        }
        return this;
    }
    passwordLengthMustBeLessThan(maxLength: number) {
        if (this._userData.password != undefined && (this._userData.password.toString().length < maxLength)) {
            this.calls.push(true);
        } else {
            this.calls.push(false);
        }
        return this;
    }

    isFalse(el: boolean) {
        return el === false
    }

    done(cb: Function): Function {
        if (!this.calls.some(this.isFalse)) {
            return cb(null, this._userData)
        } else {
            return cb('Error', null);
        }
    }

    basicCheck() {

    }

    AverageCheck() {

    }

    AdvanceCheck() {

    }

}

type str_OR_null = string | null;

const userCredential: Credentials = {
    FirstName: 'Gaurav',
    LastName: 'Gupta',
    email: 'gouravgupta840@gmail.com',
    password: "983571",
    confirmPassword: '983571',
    phoneNumber: '983571',
    username: 'Gauravsagro'
}

new Auth()
    .check(userCredential)
    .passwordMustBeString()
    .passwordLengthMustBeGraterThan(5)
    .passwordLengthMustBeLessThan(10)
    .done((err: str_OR_null, success: str_OR_null) => {
        console.log(err, success);
    });

// let second = new Auth();
// console.log(first===second);

// database
// authentication

// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data