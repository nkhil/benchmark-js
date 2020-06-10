'use strict'

const Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
 
// add tests
suite.add('Array.from', function() {
  Array.from([1, 2, 3, 4, 5]);
})
.add('#Array.slice', function() {
  [1, 2, 3, 4, 5].slice();
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });


