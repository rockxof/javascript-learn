const score = 200

const balance = new Number(308)

// console.log(score);

// console.log(balance.toString().length);
//length property is used to difine length of number
// to string property is used to convert number to string

// console.log(balance.toFixed(2));
// toFixed property is used to add decimal points

// const num1 = 156.46
// console.log(num1.toPrecision(4));
//toPrecision is used to find the round figure of any number

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));
// it is used to format the thousands and hundreds eg. output: 10,00,000

// ===================================================>Math<============================================================

// console.log(Math);
// console.log(Math.abs(1));
//abs=absolute only converts negative values to positive,#it doesn't change positive to negative
// console.log(Math.round(4.9));
//round is to do roundfigure
// console.log(Math.ceil(4.9));
//ceil = ceiling means top eg. 4.1=5,  3.1=4
// console.log(Math.floor(4.9));
//floor means down eg. 4.9= 4,   3.1=3
// console.log(Math.sqrt(100));
//square root
// console.log(Math.pow(10,2));
// power of 2
// console.log(Math.min(5,4,10,2));
// minvalue presnt in array 


// console.log(Math.random());
// it is used for generate random Numbers beetween 0 to 1
// console.log((Math.random() * 10) + 1);
// +1 is used here just to confirm that that value is not equal to ZERO
// console.log(Math.round(Math.random() * 10) + 1);
// just added round property to get natural Number

const min = 10
const max = 20

console.log(Math.round(Math.random() * (max - min + 1)) + min);