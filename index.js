const async = require('async');

const promisifiedMapLimit = (array, limit, iteratee) => {
    return new Promise((resolve, reject) => {
        async.mapLimit(array, limit, iteratee, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = function mapLimit(array, batch_size, mapper) {
    if (batch_size <= 0) {
        throw new ArgumentError('batch_size should be a positive integer');
    }
    const indexed_array = array.map((x, i) => ({x, i}));
    return promisifiedMapLimit(indexed_array, batch_size, (item, callback) => {
        Promise.resolve(item.x)
            .then((x) => mapper(x, item.i, array))
            .then(() => callback(null))
            .catch((err) => callback(err));
    });
};
