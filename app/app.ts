// Interfaces


interface NamedPerson {
    firstName: string;
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

const person = {
    firstName: 'Gaurav',
    age: 21
}

greet(person);
changeName(person);
greet(person);