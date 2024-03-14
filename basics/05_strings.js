// TODO:  String IN JavaScript

const name = "rock";
const repoCount = 15;

// console.log(name + repoCount);
//  this is old method of doing this

//======================> STRING INTERPOLATION(``)<==============================
// console.log(`Hello my Name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// *---> ${} this sign is used to recall the string.this is the modern case of using this

// Examples of Function in String
const realName = new String("Prateek");

// console.log(realName[0]);
// to count the text assing on 0 output is p
// console.log(realName.__proto__);

// console.log(realName.length);
// to specify the length of string

// console.log(realName.toUpperCase());
// to uppercase the character of strings

// console.log(realName.charAt('5'));
// to find out what character is at no.5

// console.log(realName.indexOf('t'));
// to find out at which position 't'

// console.log(realName.substring(0, 5));
// it will create a substring from the given String

// console.log(realName.slice(-6, 5));
// -value can be only used in slice

// const newName = "   Dj         "
// console.log(newName);
// console.log(newName.trim());
// .trim() is used to delete free spaces

// const url = "https://www.rockxof.com/rock%50xof"
// console.log(url.replace('%50','-'));
// it is used to replace any char 

// console.log(url.includes('j'));
// it is used to check if the given char is present in string  or not

// const newString = "Rock>Dj>prateek"

// console.log(newString.split('>'));
// it is used to split using a symbol or comma,etc. into ARRAYS

// console.log(realName.fontcolor(red));
// to change fontcolor in html using javascript