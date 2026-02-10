"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculate = exports.calculateStats = void 0;
// Функциональный подход
var calculateStats = function (values, extractor) {
    if (!values.length)
        return null;
    var valuesExtracted = values.map(extractor);
    var min = Math.min.apply(Math, valuesExtracted);
    var max = Math.max.apply(Math, valuesExtracted);
    var average = valuesExtracted
        .reduce(function (acc, el) { return acc + el; }, 0) / valuesExtracted.length;
    return { min: min, max: max, average: average };
};
exports.calculateStats = calculateStats;
// Классовый подход
// Класс со статическими методами. Можно добавлять различные виды калькуляции
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.stats = function (values, extractor) {
        if (!values.length)
            return null;
        var valuesExtracted = values.map(extractor);
        var min = Math.min.apply(Math, valuesExtracted);
        var max = Math.max.apply(Math, valuesExtracted);
        var average = valuesExtracted
            .reduce(function (acc, el) { return acc + el; }, 0) / valuesExtracted.length;
        return { min: min, max: max, average: average };
    };
    ;
    return Calculate;
}());
exports.Calculate = Calculate;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (x, y) {
        return x + y;
    };
    Calculator.prototype.calculateStats = function (values, extractor) {
        if (!values.length)
            return null;
        var valuesExtracted = values.map(extractor);
        var min = Math.min.apply(Math, valuesExtracted);
        var max = Math.max.apply(Math, valuesExtracted);
        var average = valuesExtracted
            .reduce(function (acc, el) { return acc + el; }, 0) / valuesExtracted.length;
        return { min: min, max: max, average: average };
    };
    return Calculator;
}());
// TESTS
// Test data
var players = [
    { name: 'Иванов', goals: 10 },
    { name: 'Петров', goals: 15 },
    { name: 'Сидоров', goals: 25 }
];
// 1
var stats = (0, exports.calculateStats)(players, function (p) { return p.goals; });
console.log(stats);
var statsNull = (0, exports.calculateStats)([], function (p) { return p.goals; });
console.log(statsNull);
// 2
stats = Calculate.stats(players, function (p) { return p.goals; });
console.log(stats);
statsNull = Calculate.stats([], function (p) { return p.goals; });
console.log(statsNull);
// 3
var calculator = new Calculator();
stats = (0, exports.calculateStats)(players, function (p) { return p.goals; });
console.log(stats);
statsNull = calculator.calculateStats([], function (p) { return p.goals; });
console.log(statsNull);
