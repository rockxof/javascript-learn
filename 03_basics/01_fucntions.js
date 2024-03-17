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

 console.log(newUserMessage());   
//  here it will print default name given in parameter

 