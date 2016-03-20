const mapLimit = require('./');

const test_array = [1, 2, 3, 4, 5, 6, 7];

console.log('batch_size 1: should print serially\n');
mapLimit(test_array, 1, (number, index, array) =>
    new Promise((resolve) =>
        setTimeout(() => {
            console.log("i'm number", number, "at index", index, array);
            resolve();
        }, 500)
    )
).then(() => {
    console.log('\nNow with batch_size Infinity: should print all togheter\n');
    return mapLimit(test_array, Infinity, (number, index, array) =>
        new Promise((resolve) =>
            setTimeout(() => {
                console.log("i'm number", number, "at index", index, array);
                resolve();
            }, 500)
        )
    );
}).then(() => {
    console.log('\nNow with batch_size 2: should print in pairs\n');
    return mapLimit(test_array, 2, (number, index, array) =>
        new Promise((resolve) =>
            setTimeout(() => {
                console.log("i'm number", number, "at index", index, array);
                resolve();
            }, 500)
        )
    );
}).catch((error) => {
    console.error(err.stack);
})
