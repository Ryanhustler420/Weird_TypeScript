// import { PI, calculateCircumference } from './math/circle';
import * as Circle from './math/circle';
// import { calculateRectangle } from './math/rectangle';
import CalcRectangle from './math/rectangle';

console.log(Circle.PI, Circle.calculateCircumference(20));
console.log(CalcRectangle(20, 50));

// typeScript is very claver to resolve the path of import
// it will see if the path is relative or absolute
// if the path is absolute than typeScript will look that file into
// node modules by default and if you have ambien than that will export that file
// for entire project. 