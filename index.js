const _ = require("lodash");
const R = require("ramda");


// Triple is a function that takes returns three times the parameter x.
const triple = x => x*3;
const array = [2,5,9];

// Map each element in array using triple function.
const newArrayLodash = _.map(array, triple);
const newArrayRambda = R.map(triple, array);
const newArrayJS = array.map(triple);

console.log("Lodash:", newArrayLodash);
console.log("Ramda:", newArrayRambda);
console.log("VanillaJS:", newArrayJS);