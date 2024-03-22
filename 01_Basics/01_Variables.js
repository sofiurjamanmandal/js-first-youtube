const accountId = 144553
let accountEmail = "rony@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "raj@google.com"
accountPassword = "12354"
accountCity= "kolkata"


console.log(accountId);

/*
perfer not  to use var
Because of issue in block Scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);