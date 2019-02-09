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

console.log(multiply(2, 22));