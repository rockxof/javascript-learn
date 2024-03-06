const accountId = 14453
let account_Email = "dhanjee.don@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//  accountId = 2      NOt ALLOWED YOu cannot change the constant
account_Email = "rock@com"
accountPassword = "fjalhgb"
accountCity = "bengluru"

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and fucntional scope

console.table([accountId,account_Email,accountPassword,accountCity,accountState]);