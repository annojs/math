var between = require('../').between;

module.exports = function(op, a, min, max) {
    return between(op(a, min, max), min, max);
};

