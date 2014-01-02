var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('randint', 'Chooses a number between given bounds, bounds included').
    on(is.number, function largerThanMin2(a, args) {
        return is.number(a) && args[0] <= a;
    }, is.fn, randint).
    on(is.number, function largerThanMin2(a, args) {
        return is.number(a) && args[0] <= a;
    }, function(min, max) {
        return randint(min, max, Math.random);
    });

function randint(min, max, fn) {
    return Math.ceil(fn() * (max + 1 - min)) - 1 + min;
}
