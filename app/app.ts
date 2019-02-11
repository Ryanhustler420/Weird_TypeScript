class Person {
    name: string;
    private type: string;
    protected healt: number;
    // public username: string [is another way to create and assigning value at the time of initalazation ]
    // constructor(name: string, type: string, public username: string) {
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.healt = 100;
    }}
const person = new Person('Gaurav', 'Owner');
console.log(person);