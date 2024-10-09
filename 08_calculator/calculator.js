const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++){
    result *= arr[i];
  }
  return result;
};

const power = function(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++){
    result *= base
  }
  return result;
	
};

const factorial = function(arr) {
  let result = 1;
  for(let i = 1; i <= arr; i++){
    result *= i
  }
	return result
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
