
exports.min = function min(array) {
    if (array == undefined || !array.length) {
        return 0;
    } else
        return array.reduce((min, current) => current < min ? min = current : min);
}

exports.max = function max(array) {
    if (array == undefined || !array.length) {
        return 0;
    } else
        return array.reduce((max, current) => current > max ? max = current : max);
}


exports.avg = function avg(array) {
    if (array == undefined || !array.length) {
        return 0;
    } else
        return array.reduce((sum, current) => (sum + current)) / array.length.toFixed(1);
}
