//you could say a closure is a higher order function
//that returns a function
//a closure is a record storing a function[a] together with an environment [wikipedia]

function createFunction() {
  function multiplyBy2 (num) {
    return num * 2;
  }
  return multiplyBy2;
}

function createMultiplyByNum(num) {
  function multiplyByNum (input) {
    return num * input;
  }
  return multiplyByNum;
}

//const generatedFunc = createFunction();
//const result = generatedFunc(3);

const multiplyByTwo = createMultiplyByNum(2)
//const result = multiplyByTwo(4) // 8

console.log(multiplyByTwo(1)) // 2
console.log(multiplyByTwo(2)) // 4
console.log(multiplyByTwo(3)) // 6
console.log(multiplyByTwo(4)) // 8
console.log(multiplyByTwo(5)) //10

const multiplyByThree = createMultiplyByNum(3)
console.log(multiplyByThree(1)) // 3
console.log(multiplyByThree(2)) // 6
console.log(multiplyByThree(3)) // 9
console.log(multiplyByThree(4)) // 12
console.log(multiplyByThree(5)) // 15
