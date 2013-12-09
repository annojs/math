var range = require('../').range;


module.exports = function(op, val, a, b) {
    return true; // TODO
    //return op(val, a, b) == (range(a, b + 1).indexOf(val) >= 0);
};

