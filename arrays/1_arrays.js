// Array is special object in js used to store ordered collection of values

let arr = [10,'John',true,[1,2,3]];
// console.log(arr);
// console.log(typeof arr);

// crreation 
let arr1 = new Array(1,2,3);
// console.log(arr1);

// length - no of items
arr = [1,2,3,4,5,6,7,8,4];
// console.log(arr.length);

// array methods
// adding & removing
// push: adds at last
// unshift: adds at first
// pop: removes from last
// shift: removes from start

// ...spread: can conjucate two lists or more
let arr3 = [];
arr3.unshift(1000);
arr3.unshift(2000);
arr3.push(10);
arr3.push(20);
// console.log(arr3);
arr3.pop();
arr3.shift();
// console.log(arr3);
let arr4 = [5,6,7,8,9];
let arr5 = [...arr4, ...arr3];
// console.log(arr5);

// indexOf - returns index
// lastIndexOf - right index
// includes - checks value exists

arr = [12,34,66,4,33,12];
// console.log(arr.indexOf(12));
// console.log(arr.lastIndexOf(12));
// console.log(arr.includes(56));

// sorting and reverse
arr.sort();
// console.log(arr);
arr.reverse();
// console.log(arr);

// slice & splice 
// slice - subpart of array
// splice - slice, delete and add
// splice(indexofstart,noofdelete,newelements)
arr = [12,34,56,43];
// console.log(arr.slice(0,3));
arr.splice(1,2,45,50);
// console.log(arr);

// join - array to string
// split - string to array
arr = ['Hello','Mandy'];
console.log(arr.join(' '));
console.log('Hello JS'.split(' '));