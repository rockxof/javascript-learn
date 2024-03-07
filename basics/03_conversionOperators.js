// --------------------------------conversion in Number------------------------------------------

let score = false

// console.log(typeof score); // if "" is present in the score then the output will be a STRING
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" ==> 33
// "33abc" ==> NaN (not a number)
// true ==> 1 , false ==> 0

// --------------------------------conversion in Boolean------------------------------------------
let isLoggedIn = "rock"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1==> true; 0 ==> false
// " " ==> false
// "Rock" ==> true

// --------------------------------conversion in String------------------------------------------
let aNumber = 35

let stringNumber = String(aNumber)
console.log(stringNumber);
console.log(typeof stringNumber);