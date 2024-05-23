/**** Conversion Into Number Starts ****/

//let score= 20;
//let score="33"; 
//let score="33abcd"
//let score= null;
//let score=undefined;
//let score= true;
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

//---->>>>Output after conversion console.log(valueInNumber)<<<<----

// "33" => string
//"33abcd" =>NAN
//null => 0
//undefined; => NAN
//true; => 1

/**** Conversion Into Number Ends ****/

/**** Conversion Into Boolean Starts ****/

//let IsLoggedIn = 1; 
//let IsLoggedIn = "" ; 
// let IsLoggedIn = "Sweksha";
// console.log(IsLoggedIn);
// let booleanIsLoggedIn = Boolean(IsLoggedIn);
// console.log(booleanIsLoggedIn);

//---->>>>Output after conversion console.log(booleanIsLoggedIn)<<<<----
//1 => true
// "" (****empty string****) => false
// "Sweksha" => true

/**** Conversion Into Boolean Ends ****/

/**** Conversion Into String Starts ****/

 let someNumber = 33;
 let stringNumber = String(someNumber);
 console.log("typeOf "+stringNumber+" = "+typeof stringNumber);

/**** Conversion Into String Ends ****/


/*****************Operations**********************/

//console.log("1"+2);    // output 12
//console.log(1+"2");    // output 12
//console.log("1"+2+2);    // output 122
// console.log(1+2+"2");    // output 32
//console.log(+true);  // output 1 (converts it into number)
console.log(+"");  // output 0