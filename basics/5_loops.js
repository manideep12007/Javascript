// loops
// block of instructions which repeat again and again

// for loop - preffered for determinstic iterations
// standard loop
for(let i=1; i<=5; i++){
    console.log(`iteration${i}`);
}

// for-in loop
const info = {
    fname: "mandy",
    city: "Hyderabad",
    country: "India"
}
for(let index in info){
    console.log(`${info[index]}`);
}

// for-of loop
let arr = ['Johncena','Brocklesnar','Undertaker','Edge'];
for (let superstar of arr){
    console.log(superstar);
}

// while loop - preferred for undetermisitic iterations
let i = 1;
while (i <= 5){
    if (i == 3){
        break;
    }
    console.log('Hello, Javascript');
    i++;
}

// do-while - do then check
// do-while atleast executes one time 
let j = 10
do {
    console.log(j);
    i++;
} while (i > 10);