'use strict';


function proAdd(opp, ...args){
    return opp === '*' ? args.reduce((x,y) => x * y) : args.reduce((x,y) => x +y);
}

// Write your code here
function sum(a, b){ //eslint-disable-line
    let ans = proAdd('+', a, b);
    return [ans, `The sum of ${a} and ${b} is ${ans}.`];
}
testSum(4, 7);

// Write your code here
function multiply(a,b){ //eslint-disable-line
    let prod = proAdd('*', a, b);    
    return [prod, `The product of ${a} and ${b} is ${prod}.`]
}

testMultiply(5,9);


// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
    let prod = proAdd('*', a, b, c);
    let sum = proAdd('+', a, b, c);
    return [sum, prod, `${a} and ${b} and ${c} sum to ${sum}.`, `The product of ${a} and ${b} and ${c} is ${prod}.`]
}

testSumAndMultiply(4,7,5);

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
    let sum = proAdd('+', ...testArray);
    return [sum, `${testArray} was passed in as an array of numbers, and ${sum} is their sum.`]
}

testSumArray(testArray);

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
    let prod = proAdd('*', ...testArray);
    return [prod, `The numbers ${testArray} have a product of ${prod}.`];
}

testMultiplyArray(2,3,4);