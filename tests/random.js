var between = require('../').between;


module.exports = function(op) {
    return between(op(), 0, 1);
};

