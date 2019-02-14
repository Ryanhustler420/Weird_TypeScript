function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class Person {
    constructor() {
        console.log('Hi')
   }
}

class Auth {

    private static instance: Auth;
    static url: string;

    constructor() {
        if (Auth.instance) {
            return Auth.instance;
        }
        Auth.instance = this;
    }

    request(url: string): Auth {
        Auth.url = url;
        return this;
    }

    check(username: string, password: string, cb: Function): Function {
        return cb(null, true);
    }
}

let auth = new Auth();
auth.request('api/user/auth')
    .check('gaurav', '123456', (err: any, success: any) => {
    if(err){
        return console.log('Error');
    }
    console.log('Auth Successfully Completed')
})

// let second = new Auth();
// console.log(first===second);

// database
// authentication

// 1. connect to the database according to NODE_ENV
// 2. Populate data my method call and passes the require data