const heroes = ["marvel","batman"]
const anotherhero =["spiderman","shaktiman"]

console.log(heroes.concat(anotherhero));

console.log(...heroes,...anotherhero);   // spread operator

const arr =[1,2,[4,5,6],7,[8,[9,10]]]

console.log(arr.flat(Infinity));    
console.log(Array.isArray("Sweksha"));  // checks if array or not
console.log(Array.from({name:"Sweksha"}));    //  returns empty array  **intresting.

let score1= 100;
let score2 = 200;
console.log(Array.of(score1,score2));