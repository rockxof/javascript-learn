// Functions in Javascript 

// function myName (){
//     console.log("R");
//     console.log("O");
//     console.log("C");
//     console.log("K");
// }
// myName
// referece : it is called reference we will study it in future in react.js
// myName()
// Excution : here i am recalling myName Function 

// function addTwoNumbers (num1 , num2){
//     //  here (num1 , num2) this is called Parameters
//     console.log(num1 + num2);
// }
// addTwoNumbers(120,220)
// here (120,220) it is called Arguments 


function addTwoNumbers (num1 , num2){
    // let results =  console.log(num1 + num2);
    // here if we use console.log num1+num2 it will show the value but it isnt returning anything
    let results = (num1 * num2)
    return results
    //here we have specified that return means it wiil return the value of whatever you given to it for return
 }
 // if we will not give the instruction to a function to return anything it will not return anything
//  but it will do the execution
//  const results = addTwoNumbers(5,9)
 // this results is different from the result inside the function
//  console.log("Results = ", results);

  
function newUserMessage(username = "rock2"){
    return `${username} just logged in`
}
//  console.log(newUserMessage("rock"));   
// here it will  overwrite the deafault username nd print whatever aruguments you passed

//  console.log(newUserMessage());   
//  here it will print default name given in parameter

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Rest Operator(...)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 function myShoppingCartAmount(val1, val2, ...num1){
    return num1;
 }
//  console.log(myShoppingCartAmount(100, 300, 350, 1120));

 //here im using rest operator(...) also known as spread it will converts all the numbers given in arguments
 // into an array eg: [ 100, 300, 350, 1120 ]

 // IMPORTANT INTERVIEW QUESTIONS
 // afteer adding (val1, val2) my output is: [ 350, 1120 ] my first 2 aruguments went to val1 nd val 2

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Objects nd Array in function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const user1 = {
    name : "rock",
    age : 22
}

const user2 = {
    name : "manjee",
    age : 18
}

function userData(anyobject){
    return `Hi my name is ${anyobject.name} nd my age is ${anyobject.age}`

}
console.log(userData(user2));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>array in function<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const myArray = [
    30, 40, 50, 60, 70
]

function data(anyarray){
    // return myArray[3]
    return `first num is ${anyarray[2]}`
}
console.log(data(myArray));

// using this method we undersood that how to recall anyobject or array into function
