module.exports = function(op, a, fn) {
    var ret = op(a);

    return !ret || a.indexOf(ret) >= 0;
};

