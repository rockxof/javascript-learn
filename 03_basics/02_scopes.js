// Global scope nd Block Scope

// let a = 10;
// const b = 20;
// var c = 30;
// here it is global scope

// here {} this is called the scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
// here it is Block scope
}
// console.log(c);
//IMPORTANT NOTE*** the output will be 30. but if we print a nd be it will show error which is right
// because they r in Block scope they shouldn't be recalled outside thats why we avoid to use of  (var) 
// in javascript

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTANT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// interview question : in node js the global scope is different or in web console that is different
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function daddy(){
    name = "Rock"

    function son(){
        const age = 6
        // console.log(name);
        // here it will print the name because for this son function daddy is global scope
    }
    // console.log(age);
    // here it will show error because (age) is inside block scope
    son()
}
daddy()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Important<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// here if we use numone argument at start it will execute without any error 
numOne(6)
function numOne(num){
    return num + 1
}

// here we r understanding how to declare/store function in varibale

let numTwo = function(num){
    return num + 3
}
numTwo(6)

// but here if we try sme as numone to give argument at start it will throw an error 
// the reason of the error will be the declaration of var in line 47 it is  also known as hoisting 
// we will study later about hoisting 