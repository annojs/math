module.exports = function(op, a) {
    var ret = op(a);

    return !ret || a.indexOf(ret) >= 0;
};

