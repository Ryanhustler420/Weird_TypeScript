"use strict";
// Excersice
var Map = /** @class */ (function () {
    function Map() {
        this.map = {};
    }
    Map.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.map[key];
    };
    Map.prototype.clear = function () {
        this.map = {};
    };
    Map.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return Map;
}());
var numberMap = new Map();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new Map();
stringMap.setItem('name', 'Gaurav');
stringMap.setItem('age', "27");
stringMap.printMap();
