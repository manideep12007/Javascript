// Js is scripting language for client-side 

// Variables - containers to store values
// to define variables we use let,const and var
// var - can redeclared & updated
// let - cannot redeclared but reassigned
// const - one time assigned and declared

// let and const - block scope 
// var - global scope

let fname = 'Manideep';
const PI = 3.14;
var a = 100;
var a = 'sunny';

console.log(fname);
console.log(PI);
console.log(a);

// datatypes - type of data stored in variables
// Primitive data types
// text type - string 
// numeric type - number
// conditions - boolean
// temporary empty - null
// unassigned value - undefined

// variable names - all A-Z,a-z,digits,$ and _
// variable names are case sensitive
// only a letter, underscore or $ at first char
// reserved words cannot be variable names

let number = 125; // number
let str = 'sunny'; // string
let isActive = true; // boolean
let temp = null; // null
let unassigned; // undefined

// typeOf - function returns datatype
console.log(`${number} -> dt: ${typeof number}`);
console.log(`${str} -> dt: ${typeof str}`);
console.log(`${isActive} -> dt: ${typeof isActive}`);
console.log(`${temp} -> dt: ${typeof temp}`);
console.log(`${unassigned} -> dt: ${typeof unassigned}`);

// null is object 