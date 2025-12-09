// Object 
// collection of key-vale pairs 

const user = {
    name: "Mandy",
    age: 25,
    skills: ['Python','Javascript','SQL','ReactJs','OIC'],
    address: {
        city: "Hyderabad",
        country: "India"
    },
    greet: function(){
        return `Hello, ${this.name}!`;
    }
}

// accessing values with keys
// console.log(user.name);
// console.log(user['address'].city);
// console.log(user.greet());

// creation
const obj = new Object();
// console.log(obj);

// adding/updating
user.age = 21;
user.isActive = true;
// console.log(user['isActive']);

// deleting pair
delete user.isActive;

// all keys
// console.log(Object.keys(user));
// all values
// console.log(Object.values(user));
// entries 
// console.log(Object.entries(user));

