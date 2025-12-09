// scope and clousers in js 
// Global scope - variables declared outside any function
// or block are accessed anywhere in code 
// Local scope - variables declared inside within function

let globalVar = 'I am global';
console.log(globalVar); // I am global
function demo(){
    let localVar = 'I am local';
    console.log(globalVar);
    console.log(localVar);
}
demo();

// block scope - variables declared with let and const
// var is function scoped not block scoped 

// Clousers - when function variable from its outer scope
// even after that scope has finished executing

function Outer(){
    let count = 0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
const counter = Outer();
console.log(counter());
console.log(counter());