//Higher order functions

/**
 * Breaks Dont Repeat Yourself Principle
 * 
 */
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);

/**
 * Higher Order Functions
 * Pass function in as a "parameter" or return functions
 */

 /**
  * copyArrayAndManipulate is basically a map function
  * It takes some array, and via a mechanism to iterate
  * through the data (for loop), it applies a function 
  * that transforms a copy of the input array and returns
  * this new array
  */
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function mulitplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1,2,3], mulitplyBy2);

/**
 * Arrow notation on steroids
 */
const result = copyArrayAndManipulate([1,2,3], input => input + 2);
