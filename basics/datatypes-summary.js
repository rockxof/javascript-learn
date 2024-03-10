// Primitive --> 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 
 const score = 100
 const scoreValue = 100.3
// typeof = Number

 const isLoggedIn = false
//  typeof = Boolean

 const outSideTemp = null
//  typeof = Object

 let userEmail;    
//   is also known as undefined ===> typeof = undefined

 const id = Symbol('123')
 const anotheId = Symbol('123') 
//  typeof=Symbol
//  both of the Symbol value will be different

 const bigNumber = 6452132464161046n
//  typeof=BigInt




// Reference  (Non Premitive)

// Array, Objects, Functions

const heros = [ "rock", "dhanjee", "dj"]

let myObj = {
    name : "rock",
    age : 22,
}

const myFunction = function(){
    console.log("hello world!");
}

// console.log(typeof anotheId);


// -------------------------------------------------- STACK (Premitive), Heap (Non-Premitive)-------------------------------

let myName = "Rock"

let myRealName = myName
myRealName = "Prateek"

// console.log(myName);
// output:"Rock"

// console.log(myRealName);
// output: "Prateek"

let nameOne = {
    name: "rock"
}

let nameTwo = nameOne

nameTwo.name = "Prateek"

console.log(nameOne.name);
// output: "Prateek"
console.log(nameTwo.name);
// output: "Prateek"
// *stack always give copy --> any values changes will not effect the main 
// *heap gives reference --> any values changes in future will also make changes in its function object