function createFunction() {
	function functionGenerated() {
    console.log('hello');
  }
  return functionGenerated;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();



function createFunctionPrinter(input) {
	function printFutureInput() {
    console.log(input);
  }
  return printFutureInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
	function createAddByX(num) {
    return x + num
  }
  return createAddByX
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));

// now call addByTwo with an input of 2
console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let counter = 0;
  let result;
  function callFunction(num) {
    counter++;
    return counter < 2 ? (result = func(num)) : result;
  }
  return callFunction;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
	let counter = 0;
  let result;
  function callFunction(num) {
    counter++;
    if (counter >= count) { return func() }
  }
  return callFunction;
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  setTimeout(() => func(), wait);
}


/*
Write a function rollCall that accepts an array of names and returns 
a function. The first time the returned function is invoked, it should
log the first name to the console. The second time it is invoked, it
should log the second name to the console, and so on, until all names 
have been called. Once all names have been called, it should log 
'Everyone accounted for'.
*/
function rollCall(names) {
	let counter = 0
  
  function callNextName() {
    if (counter < names.length) {
    	console.log(names[counter])
    	counter++;
    } else {
      console.log('Everbody accounted for')
    }
  }
  
  return callNextName;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'

