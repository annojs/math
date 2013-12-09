module.exports = function(op, a, b) {
    var res = op(a, b);

    return a < 0 && b % 2? res <= 0: 0 <= res;
};

