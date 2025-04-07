const accountId = 12345;
let accountEmail = "Sweksha@gmail.com";
let accountPassword = "S_1234";
// let accountCity = "Jhansi";
let accountState;

// accountId = 3425;   **** cannot change value of accountId as it is of const type.
console.log(accountId);
console.table([accountEmail, accountPassword, accountId, accountState]);   // print values in table format.

// Prefer not to use var because of issue in block scope and functional scope.


function hoisting(){
    var sum = num * num ;
    console.log(sum);
}

var num = 10;
hoisting();


