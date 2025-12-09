// function is reusable code block designed to perform specific task when it was called 
// functions are hoisted can be called before definition
// arrow functions are function expression or conise way 
// arrow functions are not hoisted
// types of parmaters: default, positional & rest 
// rest - ...args = variable length args
// functionsa are object in js

greet('mandy');
sum(12,34,56);

function greet(){
    console.log("Hello World");
};

function greet(fname){
    console.log(`Hello ${fname}`);
}

function sum(...args){
    result = 0
    for (let i of args){
        result += i
    }
    console.log(result);
}

const sayHello = (fname) => { return `Hi ${fname}`};
let res = sayHello('sunny');
console.log(res);

function isPrime(number){
    if ((!Number.isInteger(number)) || number < 2) {
        return false;
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}

let printPrimes = (a,b) => {
    let arr = [];
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++ ){
        if (isPrime(i)){
            arr.push(i);
        }
    }
    return arr.join(', ');
}

console.log(printPrimes(34,1));

/*
Function Hoisting
Entire function definition is moved to top of its scope
during compilation.

function expressions or arrow functions are not hoisted 
same way as standard functions only variable declaration
not function body

standard functions posses this parameter to show function
called from object which is not for arrow functions

Arrow functions used as callbacks or higher order functions
to call function itself as parameter in function


*/