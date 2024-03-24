// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined,NaN
// expect this every value is truthy vlaues 

// truthy values
// "0", 'false', " ", [],{}, function(){}

// IMPORTANT
// false == 0  is true
// false == '' is true
// 0 == '' is  true

// to check array is empty or not
// const userId = []

// if (userId.length === 0) {
//     console.log("Array is empty");   
// }else{
//     console.log(`user id Value is ${userId}`);
// }

// to check object is empty or not 
// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>Nullish Coalescing Operator (??) : null undefined<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// it is basically designed for that, if we r getting 2 values nd in first place there is null/undefined then 
// it will pass the second value 

let val1;
// val1 = 5 ?? 10
// val1 = undefined ?? null  
// its output will be null because in first place undefined was placed 

val1 = null ?? 5 ?? 15
console.log(val1); 

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Terniary Operator>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// syntax:                              condition ? true : false

const studentMarks = 20
studentMarks >= 33 ? console.log("passed"): console.log("failed");