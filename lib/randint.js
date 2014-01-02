var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('randint', 'Chooses a number between given bounds, bounds included').
    on(is.number, function largerThanMin2(a, args) {
        return is.number(a) && args[0] <= a;
    }, randint);

function randint(min, max) {
    return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
}
