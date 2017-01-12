# js-object-create-benchmark
A small experiment to benchmark object creation in JavaScript.

## Results

Machine specs: MacBook Pro (2.5 GHz Intel Core i7, 16 GB 1600 MHz DDR3) running
OS X El Capitan and Node.js v7.2.1

```
Object#create prototype x 96,441,130 ops/sec ±1.65% (82 runs sampled)
Object#create prototype hit x 87,560,346 ops/sec ±1.67% (85 runs sampled)
Object#create prototype miss x 88,179,069 ops/sec ±1.75% (83 runs sampled)
Object#create null x 19,123,828 ops/sec ±1.26% (84 runs sampled)
Object#create null hit x 88,030,576 ops/sec ±1.41% (88 runs sampled)
Object#create null miss x 88,126,215 ops/sec ±1.40% (86 runs sampled)
```

## Running

```sh
npm run benchmark
```
