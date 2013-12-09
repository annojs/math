var annotate = require('annotate');
var is = require('annois');
var randint = require('./randint');


module.exports = annotate('choose', 'Chooses an item randomly.').
    on(is.array, choose);

function choose(m) {
    return m[randint(0, m.length - 1)];
}
