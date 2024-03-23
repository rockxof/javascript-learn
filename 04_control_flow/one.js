// Control Flow or Logic Flow

// <,>,<=,>=,==,===,!=,!==

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IF ELSE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let yourAge = 17

// if (yourAge >= 18) {
//     console.log("You can Drive");
// }
// else{
//     console.log("Underage! You cannot Drive");
// }

// const stamina = 500

// if (stamina > 100) {
//     let power = ("flash") 
//     console.log(`New power UNlocked: ${power}`);
// }
// console.log(`New power UNlocked: ${power}`);
// if we use log here it will throw an error because its cannot access the power which is inside closed scope
// we already read it in previous classes

// const balance = 500

// if (balance > 250) console.log('You can buy a coffe In StarBucks'),console.log('yeah sure you can buy');
// this is known as implicit return (already read in previous classes) here we can use comma(,) nd write another
// but we should avoid this type of code. Its reduces the readablity

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>if else nesting<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let temperature = 48

// if (temperature < 18) {
//     console.log("Its cool here");
// } 
//     else if (temperature < 25){
//         console.log("Normal temperature");
//     } else if (temperature <= 35) {
//         console.log("Hot weather");
//     } else if (temperature < 50) {
//         console.log("Very Hot Weather");
//     }
//     else{
//         console.log("temperature is Very hot it's hard to survive");
//     }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>AND(&&) OR(||) operators in js<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const marks = 50
// if (marks >= 33 && marks <= 49) {
//     console.log("'D' Grade ");
// } else if (marks >= 50) {
//     console.log("'C' Grade");
// }   else{
//     console.log('Fail');
// }
// in AND operator both statement needs to be true

let phoneNo = true
let emaiId = false

if (phoneNo || emaiId) {
    console.log("You are logged in");
}
// in OR operator if one statement is true then its true