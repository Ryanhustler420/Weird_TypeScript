// Simple Generic
function echo(data: any) {
    return data;}
console.log(echo('Gaurav'));
// console.log(echo(27).length); //will throw error because number does'nt have length property
console.log(echo(27));
console.log(echo({ name: "Gaurav", age: 27 }))
// Generic make code very flexible and dynamic

// Better Generic 
function betterEcho<T>(data: T) {
    return data;}

// console.log(betterEcho<string>('Gaurav'));
// console.log(betterEcho<number>(27));
// console.log(betterEcho<Object>({ name: "Gaurav", age: 27 }))
console.log(betterEcho('Gaurav').length);
// console.log(betterEcho(27).length); // throw error
console.log(betterEcho({ name: "Gaurav", age: 27 }))


// Build-in Generics
const testResult: Array<number> = [1.94,2.33];
testResult.push(-2.99);
// testResult.push("String") // wrong
console.log(testResult);

// Arrays

function printALl<T>(args: T[]) {
    args.forEach(console.log);
}

printALl(['Apple','Banana']);
printALl<string>(['Apple','Banana']);

// Generic Types

// const echo2: <T>(data: T) => T = echo;

type funcType = <T>(data: T) => T;
const echo2: funcType = betterEcho; // betterEcho function signature fits in this type that why we can assign that function into it

console.log(echo2<string>('Something'))

// Generic Class
type N_OR_S = number | string;

// class SimpleMath <T extends N_OR_S, U extends N_OR_S> {
class SimpleMath <T extends U, U extends N_OR_S> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

// const simpleMath = new SimpleMath();
const simpleMath = new SimpleMath<number, number>();
simpleMath.baseValue = 10;
// simpleMath.baseValue = '10'; throw error
simpleMath.multiplyValue = 30;
console.log(simpleMath.calculate());