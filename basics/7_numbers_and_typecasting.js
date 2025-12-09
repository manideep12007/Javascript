// Numbers - all numeric type

let n = 567;
console.log(n);
console.log(typeof n);

// typecasting - implict conversion
// typeconversion - explict conversation

console.log(Number('123')); // typeconversion
console.log(12 + '12'); // 1212 typecasting
console.log(12 + 12 + '12'); // 2412
console.log('12'+12+ 12); // 121212

// parseInt parses integer from string 
// parseFloat parses floattingpoint from string 
// both parses from prompt inputs

// validation
console.log(Number.isInteger('34')); // false
console.log(Number.isNaN(undefined)); // true

// toFixed - returns decimal points
// toPrecesion - returns precesion digits & decimal points
console.log(12.344565.toFixed(3)); // 12.345
console.log(12.344565.toPrecision(5)); // 12.345

// Math module 
console.log(Math.floor(Math.random()*6)+1); 
// random number from 1 to 6