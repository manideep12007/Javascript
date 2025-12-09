// Datatypes - type of data usage 
// primitive datatypes 
// string - sequence of chars enclosed by quotes
// number - all numeric type integers & decimals
// boolean - true or false
// null - temporary empty value
// undefined - defined but not assigned
// symbol - unique identity 
// bigint - more range than number type 

// typeOf function returns datatype

let str = 'Hello'; // string
let num = 345; // number
let bigInt = 2456n; // bigint
let isActive = true; // boolean
let sym = Symbol(123); // symbol
let nothing = null; // null
let temp; // undefined
console.log(`${str} and ${typeof str}`);
console.log(`${num} and ${typeof num}`);
console.log(`${bigInt} and ${typeof bigInt}`);
console.log(`${isActive} and ${typeof isActive}`);
console.log(`${nothing} and ${typeof nothing}`);
console.log(`${temp} and ${typeof temp}`);
console.log(sym);
console.log(typeof sym);
