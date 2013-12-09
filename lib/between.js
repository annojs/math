var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('between', 'Checks whether or not given bounds contain the given number, bounds included.').
    on(is.number, is.number, is.number, between);

function between(a, min, max) {
    return min <= a && a <= max;
}
