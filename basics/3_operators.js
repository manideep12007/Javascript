// operators in js

// 1. Assignment operators 
// =, +=, -=, *=, /=, %=, **=
// uniary operators: post and pre

let a = 5;
let b = 10;
a += 10;
console.log(a);
console.log(b);

console.log(a++); //post-increment
console.log(++a); //pre-increment
// similarly a--, --a

// 2. Arithematic operators
// +,-,*,/,%,**
let n = 56;
console.log(n*5);
console.log(n/5);
console.log(n % 5);

// 3. Comparsion operators
// >,<,>,<=,>=,==,===,!=,!==
// == value equality
// === value & datatype equality
console.log(12 == '12'); //true
console.log(12 === '12'); //false

// 4. Logical operators 
// and &&, or ||, not !
console.log(12 > 5 && 23 < 45); // true
console.log(12 > 5 || 23 < 45); // true