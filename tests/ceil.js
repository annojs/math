var between = require('../').between;

module.exports = function(op, a) {
    return between(op(a), a, a + 1);
};

