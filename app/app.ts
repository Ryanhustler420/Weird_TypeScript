// Interfaces


interface NamedPerson {
    firstName: string;
    age?: number; // this could be available or not but the key must be age
    [propName: string]: any // here we dont know that what the key would be
    // checkAge: (age: number, currentYear: number) => boolean;
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
    hobbies: ['Cooking', 'Sports']
}

greet(person);
// greet({ firstName: 'Gaurav', age: 27 }); // this will check if you pass object literal directly. this will throw error
greet({ firstName: 'Gaurav', age: 27 }); // this is possible if you put optional property in NamedPerson interface using ? mark
greet({ firstName: 'Gaurav' });
changeName(person);
greet(person);