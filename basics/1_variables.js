// variables - containers to store values 
// variables are assigned in js with certain keywords

// var - function-scoped
// can be redeclared 
var name = 'manideep';
var name = 'John Cena';
console.log(name);

// let - block-scoped
// can be reassigned not declared
let age = 25;
age = 21;
console.log(age);

// const - block-scoped
// cannot be reassigned or redeclared
const COUNTRY = 'IN';
console.log(COUNTRY);

// let and const are ES6 features
// let and const are preffered in modern JS
// const for values that don't change