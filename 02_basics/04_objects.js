// ** const tinderUser = new Object(); // creating an object using Object constructor or singleton object

const tinderUser ={}

tinderUser.id="123abc";
tinderUser.name = "Sweksha";
tinderUser.isLoggedIn = false;

const regularUser = {
    email:"sweksha@1234gmail.com",
    fullname: {
        userfullname:{
            firstname:"Sweksha",
            lastname:"Shrivastava"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // accessing nested object


const obj1 = {1: "one", 2: "two", 3: "three"};

const obj2 = {1: "one", 2: "two", 3: "three"}; 

const obj3 = Object.assign({}, obj1, obj2); // shallow copy of object
console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three' }

const obj4 ={...obj1,...obj2}; // spread operator to copy object
console.log(obj4); // { '1': 'one', '2': 'two', '3': 'three' }

console.log(Object.keys(tinderUser)); // returns keys of object in array format
console.log(Object.values(tinderUser)); // returns values of object in array format 

console.log(Object.entries(tinderUser)); // returns key-value pair of object in array format
console.log(Object.entries(tinderUser).length); // returns length of object
console.log(tinderUser.hasOwnProperty("id")); // returns true if property exists in object
console.log(tinderUser.hasOwnProperty("id1")); // returns false if property does not exist in object