// console.log("2">1);     //  output = true  (works because JS converts its data type to int)
//console.log(null > 0);     //  output = false
//console.log(null == 0);    //  output = false
//console.log(null >= 0);    //output =   true   
// (the reason is equality check == and comparisions > < >= <= works differently. Comparisions converts null to a number, treating it as 0 that why null>=0 gives output as true and null>0 as false. )

console.log(undefined >0)    //  output = false
console.log(undefined ==0)   //  output = false
console.log(undefined >=0)   //  output = false


console.log("2" === 2)      // output = false  (=== operator strictly checks the value as well as its data type)
