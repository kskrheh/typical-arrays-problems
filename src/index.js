exports.min = function min(array) {
    return isValidArray(array) ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    return isValidArray(array) ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    if (!isValidArray(array)) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};

const isValidArray = (array) => Array.isArray(array) && array.length > 0;
