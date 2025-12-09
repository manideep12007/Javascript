// strings - sequence of characters encloded between quotes
let str1 = 'Hello Javascript';
console.log(str1);

// string methods - which returns new string without change

// length - returns number of chars
str1 = 'Javascript';
console.log(`${str1} has ${str1.length} number of chars.`);

// at - returns char at index (supports negative index)
console.log(str1.at(-1)); // t
// charAt - returns char at index 
console.log(str1.charAt(4));

// indexOf - returns char index 
console.log(str1.indexOf('p'));
console.log(str1.lastIndexOf('a'));

// slice - returns sub string (negative index also)
console.log(str1.slice(-4,-1));
// substring - returns sub string 
console.log(str1.substring(0,5));

// case conversion
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// string manipulation
// concat - join strings 
console.log('Hello'.concat(' ','world'));
// repeat - number of repeatations
console.log('abd'.repeat(5));
// padStart - pads at begin
console.log('Hello'.padStart(10,'@'));

// includes - returns is substring present or not included
console.log('ABCDEF'.includes('aeiou'));

// startsWith and endsWith
console.log('Hello'.startsWith('h')); // false
console.log('Hello'.endsWith('o')); // true 

// replace - to replace substr 
console.log('Hello python!'.replace('python','JS'));

// split - turns into array
console.log('Hello world of js'.split(' '));

// trim - removes whitespaces 
console.log('  hello '.trim());

// String is immutable, which cannot change 
// string methods doesn't change original string but returns new string