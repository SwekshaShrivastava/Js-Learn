// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).        --** Refer MDN DOCs for more.


let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);     // returns object

let createdDate = new Date(2024,0,1);
console.log(createdDate.toDateString());  // output = Mon Jan 01 2024  "because months starts from 0 in Js."

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(createdDate.getTime());    // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

