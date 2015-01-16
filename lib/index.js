'use strict';

var names = [
    'abs', 'acos', 'asin', 'atan', 'atan2', 'between', 'ceil', 'choose',
    'clamp', 'cos', 'exp', 'floor', 'log', 'max', 'min', 'pick', 'pow',
    'randint', 'random', 'range', 'round', 'sin', 'sqrt', 'tan'
];
var modules = {};

names.forEach(function(name) {
    modules[name] = require('./' + name);
});

module.exports = modules;
