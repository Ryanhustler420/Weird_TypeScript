// Interfaces


interface NamedPerson {
    firstName: string;
    age?: number; // this could be available or not but the key must be age
    [propName: string]: any // here we dont know that what the key would be
    // checkAge: (age: number, currentYear: number) => boolean;
    greet(lastName: string): void;
}


// function greet(person: any) {
//     console.log(`hello ${person.name}`);
// }

// function greet(person: { name: string }) {
//     console.log(`hello ${person.name}`);
// }

function greet(person: NamedPerson) {
    console.log(`hello ${person.firstName}`);
}

// function changeName(person: { name: string }) {
//     person.name = "Saurav";
// }

function changeName(person: NamedPerson) {
    person.firstName = "Saurav";
}

const person: NamedPerson = {
    firstName: 'Gaurav',
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log(`Hi I am ${this.firstName} ${lastName}`)
    }
}

greet(person);
// greet({ firstName: 'Gaurav', age: 27 }); // this will check if you pass object literal directly. this will throw error
// greet({ firstName: 'Gaurav', age: 27 }); // this is possible if you put optional property in NamedPerson interface using ? mark
// greet({ firstName: 'Gaurav' });
changeName(person);
greet(person);
person.greet('Everyone')


class Person implements NamedPerson {
    firstName: string = '';
    greet(lastName: string) {
        console.log(`Hi I am ${this.firstName} ${lastName}`)
    }
}

const myPerson = new Person();
myPerson.firstName = "Ram";
greet(myPerson);
myPerson.greet('Everyone');

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValueFunc;

myDoubleFunc = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
}

console.log(myDoubleFunc(10, 20));

// interface NamedPerson {
//     firstName: string;
//     age?: number;
//     [propName: string]: any
//     greet: DoubleValueFunc
// }