// forEach loop in Array
// ***most Important**** looop for array which we gonna use always

const coding = ["js", "python", "java", "cpp", "c", "golang" , 10]

// coding.forEach( function (rock)  {
    // we can paas anything in parameter of function it will recall eg: instead of rock you can write ur name,
    // item, hello,aything,etc. but write a readable code 
//     console.log(rock);
// } )
// here we r using normal function inside forEach

// coding.forEach(  (rock) => {
//     console.log(rock);
// } )
// here we r using arrow function inside forEach 

// another method:-
// function hello(item)
// {
//     console.log(item);
// }
// we can simply write a function before nd later in forEach we can give reference of if 
// coding.forEach(hello)
// here we neeed to give reference only don't excute the code like eg: (hello()) it will throw an error

// we can get many values in forEach here is eg:-
// coding.forEach( (item, index, arr) =>
// {
//     console.log(item, index, arr);
// })
//  it will print the item name- js nd other , in index it will print index value, and in arr it will print Array\

const codingLanguage = [
    {
        languageName : "JavaScript",
        shortName : "js"
      
    },
    {
        languageName : "Python",
        shortName : "py"
    },
    {
        languageName : "Java",
        shortName : "java"
    },
    {
        languageName : "Golang",
        shortName : "go"
    },

]

codingLanguage.forEach( (item) => {
    console.log(item.shortName);
} )