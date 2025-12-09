// Validating user and its age with nested functions

function validateUser(user){
    function isValidName(name){
        return name.length > 2;
    }
    function isValidAge(age){
        return age >= 18;
    }
    return isValidName(user.name) && isValidAge(user.age);
}

user = {
    name : 'Manideep',
    age: 25,
}
let result = validateUser(user);
// console.log(result);

// sum of numbers
function sum(...args){
    var result = 0;
    for(ele of args){
        result += ele;
    }
    return result;
}
// console.log(sum(1,2,3,4));

// even or odd 
const even_odd = (num) => num % 2 == 0 ? 'Even':'Odd'; 
// console.log(even_odd(345));

// greet user 
function greet(name='Guest'){
    return `Hello, ${name}`;
}
// console.log(greet());
// console.log(greet('Mandy'));

// recursion
function factorial(n){
    if (n === 0) {
        return 1
    }
    return n * factorial(n-1)
}
// console.log(factorial(5));

// counter
function makeCounter(){
    let count = 0;
    function inner(){
        count++;
        return count;
    };
    return inner;
}
const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// applyTwice
let arr = [1,2,3,4,5,6];
function applyTwice(x){
    return x + x;
}
let arr1 = arr.map(applyTwice);
// console.log(arr1);

// square of arr 
let arr2 = arr.map((x) => {return x**2});
// console.log(arr2);

// Rest Vs Spread
// Rest gathers all values into array
// Spread scatters all array values into single

const nums = [1,2,3,4,5];
console.log(Math.max(...nums));