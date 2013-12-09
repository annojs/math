var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('clamp', 'Clamps given number between given bounds').
    on(is.number, is.number, function(a, args) {
        return is.number(a) && args[1] <= a;
    }, clamp);

function clamp(a, min, max) {
    return Math.max(min, Math.min(max, a));
}
