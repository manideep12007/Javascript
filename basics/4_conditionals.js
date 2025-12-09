// conditionals 
// if true do this else this

let num = 12;
if (num % 2 == 1){
    console.log(`${num} is odd number`)
} else {
    console.log(`${num} is even number`)
}

if (num === 0){
    console.log('Zero');
} else if (num > 0){
    console.log(`${num} is positive number`);
} else {
    console.log(`${num} is negative number`);
}

let age = 15;
if (age >= 18){
    console.log(`${age} age eligible to cast vote`);
} else {
    console.log(`${age} age not eligible to cast vote`);
}

// ternary operation
let message = (age >= 18) ? 'Can drive' : 'Cannot drive';
console.log(message);

// switch 
let daynum = 5;
switch (daynum){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log();
        break;
}
