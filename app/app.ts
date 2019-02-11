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