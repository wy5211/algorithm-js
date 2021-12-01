import Set from './index';

// const set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');
// set.add('d');

// console.log('11', set.has('a'), set.remove('b'), set.values(), set.size());

const setA = new Set();
const setB = new Set();

setA.add('a');
setA.add('b');
setA.add('c');
setA.add('e');

setB.add('c');
setB.add('d');
setB.add('e');

// var unionSet = setA.union(setB);
// console.log('unionSet values', unionSet.values());

var intersectionSet = setA.intersection(setB);
console.log('intersectionSet values', intersectionSet.values());
