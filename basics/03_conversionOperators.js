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
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ---------------------------------------OPERATIONS------------------------------------------

let value = 3
let negValue = -value // output will be negative 
// console.log(negValue);

// console.log(2**52); // 2 to the power 52
// console.log(91%8); // gives reminder
// console.log(5/5);
// console.log(5+5);
// console.log(5-3);
// console.log(5*3);

let str1 = "Hi"
let str2 = " Rock"

let str3 = str1 + str2

// console.log(str3);

//  console.log("1" +2); // Output will be ==> 12
//  console.log(1 +"2"); // Output will be ==> 12
//  console.log("1" +2 + 5); // Output will be ==> 125
//  console.log(1 + 2 + "5"); // Output will be ==> 35


//  console.log( 3 + 4 * 5 % 3); //❌❌ we should avoid this type of codes we can simply use ((3 + 4) * 5 % 3)

// console.log(+true);  ❌❌this will give output as 1 but its wrong 
// console.log(+"");  ❌❌wrng we should avoid these types of convesion operations

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 ==> we should avoid this type of tricky or confusing statement it decreases the readablity

  let gameCounter = 100
  gameCounter++; 
  console.log(gameCounter);

//   eg- x++;(postfix---> its add after)
//    ++x;(prefix---> its add before)


