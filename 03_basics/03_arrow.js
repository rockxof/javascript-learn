//using of (this) keyword 
const user = {
    username : "rock",
    price : 299,
    welcomemessage : function(){
        // console.log(`${this.username} , Welcome to the Website`);
    }
}  
// here the function is inside an object where our function isn't independent thats why we have to give argument like that 
// user.welcomemessage()
// user.username = "rockkkkkkk"
// user.welcomemessage()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>important<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log(this);
// output : {} , it  is because of we r using js in node
//if we do this same in browser-console there the output will be shown Window. we will read about it later
// this question can be asked inthe interviews Remember**** it

// function one(){
//     let username = "Rock"
//     console.log(this.username);
// }
// one()
// the output for this function will be undefined 
// so we dont use (this) inside a function

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Arrow Function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const name = () => {
     // ==> this symbol is known as arrow funtion
//     let username = "Rock"
//     console.log(this.username);
    
// }
// name()

// () => {} --------------- This is the basic syntax of an arrow function. Nd it can be used in Stored varible function
// eg=>
// const raju = (num1, num2) => {
//     return num1 + num2
// }
// console.log(raju(2, 5));

// Another method of using arrow function

// const raju = (num1, num2) =>  num1 + num2
// we can also write it as :
const raju = (num1, num2) =>  (num1 + num2)
// This method is known as 'implicit return'
// when we use `return` keyword that is called explicit return
// IMPORTANT*********** if we use curlybraces{} then we need to use 'return' keyword for the returning value 
console.log(raju(5,6));


