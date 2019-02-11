class Person {
    name: string;
    private type: string;
    protected healt: number;
    // public username: string [is another way to create and assigning value at the time of initalazation ]
    // constructor(name: string, type: string, public username: string) {
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.healt = 200;
    }
    printAge() {
        console.log(this.healt);
        this.setType("CEO")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type)
    }

}
const person = new Person('Gaurav', 'Owner');
person.printAge();

// Inheritance

class ThisUser extends Person {
    name = "Gaurav";
    constructor() {
        super(name, 'Employee');
        this.healt = 50;
        // console.log(this.type) can't access!
    }
}

const gaurav = new ThisUser();
console.log(gaurav)


// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species.toUpperCase();
    }

    set species(value: string) {
        value.length > 3 ? this._species = value : this._species = "Default";
    }
}

let plant = new Plant();
console.log(plant.species);

plant.species = "AB";
console.log(plant.species);

plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods

class Helper {
    static PI: number = 3.14; // by default value
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helper.PI * 2);
console.log(Helper.calcCircumference(8));

// Abstract Classes

// it may be helpfull for basic setup for any classes not this class won't instanciat 
// you can bundle some generall functionallty which should provide basci blue print to child calss
// but remember it will never instanciat. so, Keep that in mind.
abstract class Project {
    projectName: string = "Default";
    budget: number = 0;

    abstract changeName(name: string): void;

    clacBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        // set the login the way you want to set
        this.projectName = name;
    }
}


let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructors

class OnlyOne {
    // Added 'static', bucause we can use it like [OnlyOne.instance]. and
    // if not 'static' than this will be 'onlyOne = new OnlyOne('the Only One); onlyOne.instance'
    // which is not what we want
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// Singleton Class which gives only one instance at runtime.

// let wrong = new OnlyOne('The Only One'); // wrong way
let right = OnlyOne.getInstance(); // right way

console.log(right.name);
// right.name = 'Somthing else'; // throw error because this property is readOnly