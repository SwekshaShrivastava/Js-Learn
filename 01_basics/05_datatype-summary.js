// #Primitive Datatype 
// 7 type: String,Number,Boolean,null,undefined,Symbol,BigInt

//const Id = Symbol(1234);
//const anotherId = Symbol(1234);
//console.log(Id == anotherId)  // output false

// #Non-Primitive Datatype( Refrence Type)
// Array,Objects,Functions


//***********************************************************Stack And Heap Memory************************************************************//
  // # Primitive datatype uses Stack Memory
let myName = "Sweksha Shrivastava"
let anotherName = myName;
anotherName = "Anu"
console.log(anotherName);
console.log(myName);


// # Non Primitive datatype uses Heap Memory
let userOne = {
    userEmail: "Sweksha@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.userEmail = "Anu@google.com"

console.log(userOne);
console.log(userTwo);