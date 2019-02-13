// import { PI, calculateCircumference } from './math/circle';
import * as Circle from './math/circle';
// import { calculateRectangle } from './math/rectangle';
import CalcRectangle from './math/rectangle';

console.log(Circle.PI, Circle.calculateCircumference(20));
console.log(CalcRectangle(20, 50));

// run these and check
// tsc
// tsc --outFile .\app.js
// tsc .\app.ts --outFile .\app.js


// A popular module loader is Systemjs

// refer [here](https://github.com/systemjs/systemjs)
// install package for systemjs
// npm i --save systemjs