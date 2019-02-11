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