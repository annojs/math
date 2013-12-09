var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('randint', 'Chooses a number between given bounds, bounds included').
    on(is.number, is.number, randint);

function randint(min, max) {
    if(max < min) return;

    return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
}
