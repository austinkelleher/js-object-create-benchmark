const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

let objProto = {};
objProto.a = 'b';
objProto.c = 5;

let objProto2 = {};

let objNew = new Object();
objNew.a = 'b';
objNew.c = 5;

let objNullProto = Object.create(null);
objNullProto.a = 'b';
objNullProto.c = 5;

suite.add('Object#create prototype', function () {
    {};
})
.add('Object#create prototype hit', function () {
    objProto.a;
})
.add('Object#create prototype miss', function () {
    objProto.b;
})
.add('Object#create prototype create delete __proto__', function() {
    let objProto = {};
    delete objProto.__proto__;
})
.add('Object#create prototype delete __proto__ with keys', function() {
    delete objProto.__proto__;
})
.add('Object#create prototype delete __proto__ without keys', function() {
    delete objProto2.__proto__;
})
.add('Object#create new', function () {
    new Object();
})
.add('Object#create new hit', function () {
    objNew.a;
})
.add('Object#create new miss', function () {
    objNew.b;
})
.add('Object#create null', function () {
    Object.create(null);
})
.add('Object#create null hit', function () {
    objNullProto.a;
})
.add('Object#create null miss', function () {
    objNullProto.b;
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({
  'async': true
});
