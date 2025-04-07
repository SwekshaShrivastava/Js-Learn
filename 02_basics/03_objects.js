const mySymbol = Symbol("Key1"); // creating a symbol

// declare and initializing object in literal format
const JsUser={
    name:"Sweksha",
    "full name":"Sweksha Shrivastava",
    [mySymbol]:"myKey1",
    age:25,
    email:"Sweksha@gmail.com",
    location:"Gurugram",
    isLoggedIn:false,
    LastLoginDays:["Monday","Tuesday","Wednesday"],

}

// accessing objects
console.log(JsUser.name); // dot notation
console.log(JsUser["name"]); // bracket notation
console.log(JsUser["full name"]); // bracket notation
console.log(JsUser.mySymbol); // symbol
// This is not the correct way to access the value of a symbol. 
console.log(typeof JsUser.mySymbol)  // Here, it is treating the symbol as a string key, which is why it is returning the type as "string" instead of the actual symbol value.

console.log(JsUser[mySymbol]); // correct way of accessing symbol

//  ** Object.freeze(JsUser);   // This will make the object immutable, meaning you cannot add, remove or change any properties of the object.
console.log(JsUser); // object after freeze

JsUser.greetings = function(){
    console.log(`Hello, my name is, ${this.name}`);
}

console.log(JsUser.greetings()); 
