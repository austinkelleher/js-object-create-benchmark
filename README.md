# js-object-create-benchmark
A small experiment to benchmark object creation in JavaScript.

## Results

Machine specs: MacBook Pro (2.5 GHz Intel Core i7, 16 GB 1600 MHz DDR3) running
OS X El Capitan and Node.js v7.2.1

```
Object#create prototype x 96,121,992 ops/sec ±1.53% (83 runs sampled)
Object#create prototype hit x 88,656,642 ops/sec ±1.69% (85 runs sampled)
Object#create prototype miss x 88,448,656 ops/sec ±1.68% (85 runs sampled)
Object#create prototype create delete __proto__ x 17,091,139 ops/sec ±1.30% (88 runs sampled)
Object#create prototype delete __proto__ with keys x 18,337,124 ops/sec ±0.91% (86 runs sampled)
Object#create prototype delete __proto__ without keys x 19,515,279 ops/sec ±0.94% (85 runs sampled)
Object#create new x 30,436,062 ops/sec ±1.01% (88 runs sampled)
Object#create new hit x 90,577,878 ops/sec ±1.69% (84 runs sampled)
Object#create new miss x 90,737,806 ops/sec ±1.53% (83 runs sampled)
Object#create null x 18,791,021 ops/sec ±1.12% (87 runs sampled)
Object#create null hit x 92,049,928 ops/sec ±1.46% (85 runs sampled)
Object#create null miss x 89,745,354 ops/sec ±1.61% (82 runs sampled)
```

## Running

```sh
npm run benchmark
```
