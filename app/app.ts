// string
let myName: string = 'Gaurav';
// myName = 28; // throw error

// number
let myAge = 27.5;
// myAge = "Gaurav"; // throw error

// boolean
let hasHobbies = false;
// hasHobbies = 1; // throw error

// assign types : any
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: string[] = ["Cooking", "Sports"];
hobbies = ['A String'];

// tuples : like has table
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Grey, // 0
    Green = 100, // 100
    Blue, // 101
    Yellow = 3, // 3
    purple, // 4
    pink // 5
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 'M4' }
console.log(car);


function returnMyName(): string {
    return myName;
}

// returnMyName()

function sayHello(): void {
    console.log("hello Gaurav")
}

// sayHello();

// argument types

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 22));

// function types
// only assign function which takes two parameter of type number and number and returns number
let myMultiply: (val1: number, val2: number) => number;

// myMultiply = sayHello;
// myMultiply(); // throw error because of the function signature

myMultiply = multiply;
console.log(myMultiply(2, 2));


// Objects
let userData = {
    name: 'Gaurav',
    age: 21,
};

// userData = {}; // throw error beacuse this object must have a number field and age field or property

// this is also not valid because the propert has different name 
// 'a' must be name
// 'b' must be age

// userData = { 
//     a: "hello",
//     b: 22
// };
// this is type defination and not value
// { name: string, age: number }

let newUserData: { name: string, age: number } = {
    name: "Gaurav",
    age: 27
}

newUserData = {
    name: 'gaurav',
    age: 23
}

// Complex Object Example

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 200, 300, 400],
    output: function (all: boolean) {
        return this.data;
    }
}

// complex = {} // will throw an error

// type alias
// this is type creation and not an Object
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 200, 300, 400],
    output: function (all: boolean) {
        return this.data;
    }
}

// union type

let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = boolean; // will throw error
