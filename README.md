# promise-maplimit
maps promises in batches of a specific size.

## Installation
```bash
npm i promise-maplimit --save
```

## Usage
The package exports a single function:

### `mapLimit(array: Any[], batch_size: Integer, mapper: Func<Any, Integer, Any[]> -> Promise<Any>) -> Promise<Any[]>`

* `array`: Array of Promises or values or both.
* `batch_size`: Positive integer, how many promises run simultaneously.
* `mapper(item, index, array)`: Function that is called for every entry of `array` after it resolves.

The function returns a `Promise<Any[]>`.

## License
MIT
