function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class Person {
    constructor() {
        console.log('Hi')
   }
}

// tsc -W FOR continued watching

class Auth {

    private url: { username: string, password: string } = {
        username: '',
        password: ''
    }
    private calls: boolean[] = [];
    check(username: string, password: string) {
        this.url.username = username
        this.url.password = password
        this.calls.push(true);
        return this;
    }
    passwordMustBeString() {
        if (typeof this.url.password === 'string') {
            this.calls.push(true);
        } else {
            this.calls.push(false);
         }
        return this;
    }
    passwordMustBeGraterThan(minLength: number) {
        if (this.url.password.length > minLength) {
            this.calls.push(true);
        } else {
            this.calls.push(false);
        }
        return this;
    }
    passwordMustBeLessThan(maxLength: number) {
        if (this.url.password.length < maxLength) {
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
            return cb(null, 'All Ok')
        } else {
            return cb('Error', null);
        }
    }

}

type str_OR_null = string | null;

new Auth()
    .check('gaurav', '123456')
    .passwordMustBeString()
    .passwordMustBeGraterThan(6)
    .passwordMustBeLessThan(10)
    .done((err: str_OR_null, success: str_OR_null) => {
        console.log(err, success);
    });

// let second = new Auth();
// console.log(first===second);

// database
// authentication

// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data