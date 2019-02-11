var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.44;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(20));
console.log(PI);
// run this 
// tsc --outFile app.js .\circleMath.ts .\rectangleMath.ts .\app.ts
