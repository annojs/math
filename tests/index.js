var generate = require('annogenerate');

generate.greaterThanZero = function() {
    return generate.number(0);
};

// TODO: merge these two somehow
generate.largerThanMin = function() {
    return generate.number(this.args[1]);
};
generate.largerThanMin2 = function() {
    return generate.number(this.args[0]);
};

generate.betweenOnes = function() {
    return generate.number(-1, 1);
}

var fuzz = require('annofuzz')(generate);
var is = require('annois');


module.exports = execute();

function execute() {
    var tests = require('require-dir')('.');

    Object.keys(tests).forEach(function(name) {
        var test = tests[name];
        var module = require('../')[name];

        fuzz(module, test, 100);
    });
}
