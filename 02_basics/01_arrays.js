// const arr = [1,2,3,4,5];
// console.log(arr);
// console.log(typeof(arr));   // output = object

const newArr = new Array(10,9,8,7,6,5);
//console.log(newarr[0]);
//console.log(newarr.length);

//********************Array methods********************//
//newArr.push(20);  // adds element at the  last position
//newArr.pop()   // removes elements from back
//newArr.unshift(25);   // adds element at the starting position
//newArr.shift();       // removes elements from starting position

console.log("A", newArr);
console.log(newArr);
const myn1 = newArr.slice(1,3)    
console.log(myn1);
console.log("B", newArr);

const myn2 = newArr.splice(1,3);
console.log(myn2);
console.log("C",newArr);    // splice transforms the orignal array.



