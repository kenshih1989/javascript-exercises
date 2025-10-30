const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return Number(array.reduce((accumulator,currentValue)=>accumulator+currentValue,0));
  // return array.reduce((total, current) => total + current, 0);
  // return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((a,b)=> a*b);
};

const power = function(base,exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	let result = 1;
  for (let index = number; number != 0; number--) {
    result*=number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
