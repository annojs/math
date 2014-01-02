var annotate = require('annotate');
var is = require('annois');
var randint = require('./randint');


module.exports = annotate('choose', 'Chooses an item randomly.')
    .on(is.array, is.fn, choose)
    .on(is.array, function(m) {
        return choose(m, randint);
    });

function choose(m, fn) {
    return m[fn(0, m.length - 1)];
}
