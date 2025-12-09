// Higher order functions 
// function taking function as argument
// also called callback 

function greet(name, callback){
    console.log('Hello '+ name);
    callback();
}
function sayHi() {
    console.log("Hi");    
}

// greet('mandy',sayHi);

// Built-in Higher order functions
// map - transforms each element

let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = arr.map((x,idx,arr) => x ** 2);
console.log(arr1);
console.log(arr);

// filter - transforms each element based on condition
let arr2 = arr.filter((x) => x % 2 == 1);
console.log(arr2);

// reduce - transforms into single one result
let summation = arr.reduce((res,acc) => res + acc,0);
console.log(summation);

// forEach - returns each element operation of arr 
arr.forEach((ele) => {
    console.log(ele ** 3);
})