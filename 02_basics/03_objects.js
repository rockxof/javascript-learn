//Singleton
// ***IMP____ whenever we declare LITERALS it will not create SINGLETON
// ***if made through CONSTRUSCTER it will create SINGLETON. eg- 
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Rock",
    "full name": "Prateek Pandey",
    [mySym] : "key1",
    age : 22,
    location : "Jaipur",
    email : "rockxof@ google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

//  console.log(jsUser.age);
//  console.log(jsUser["full name"]);
 // we use this method to print any string in console log impt** these are the two types we can print
// whenever we use Square brackets don't use Dot(.)

// console.log(jsUser[mySym]);
// if we need to display any symbol inside the Object we need To difine it in box []

// jsUser.email = 'rockxof@html.com'
// it will overwrite the email

// Object.freeze(jsUser);
// it is used to freeze object 

// jsUser.email = 'rockxof@htl.com'
// it will not change because earlier we used object freeze function 

jsUser.greeting = function(){
    console.log('hello world')
}

jsUser.greetingTwo = function(){
    console.log(`hello my name is ${this.name}`)
}
console.log(jsUser.greetingTwo());
//output-: hello my name is Rock


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTANT NOTES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// in most cases we gonna use dot(.) for recalling anything inside an Object but,
// in some cases we need to use SqareBox[] to recall any specific string or symbols inside an Object 
// eg-:  [mySym],["full name"]