// constructer Object = Singleton

// const tinderuser1 = new Object()
// it is a singleton

const tinderuser = {}
// it is not a singleton ----- Literals

tinderuser.Id = "4569"
tinderuser.Name = 'Rock'
tinderuser.Age = 22 
tinderuser.IsLoggedIn = false

// console.log(tinderuser);
// output : { Id: '4569', Name: 'Rock', Age: 22, IsLoggedIn: false }


const regularUser = {
    userId : "rock231",
    Name : {
        realName : {
            firstName : "Prateek",
            lastName : "Pandey"
        }
    }
}

// this is called an object Nesting

// console.log(regularUser.Name.realName.lastName);

const obj1 =  { 1 : "A" , 2 : "B"}
const obj2 =  { 3 : "C" , 4 : "D"}
const obj3 =  { 5 : "E" , 6 : "F"}

// const objParent = Object.assign( {} , obj1 , obj2 , obj3)
// Object.assign( {Target} , source...) this is used to combine objects

const objParent = { ...obj1, ...obj2, ...obj3}
// here we r using spread method like last tym we used it in array to combine array
// Most tym we r gonna use Spread method to combine arrays or objects


const user = [
    {
        userId : 'rock1',
        email : 'rock1@email.com',
        
    },
    {
        userId : 'rock2',
        email : 'rock2@email.com'
    },
    {
        userId : 'rock3',
        email : 'rock3@email.com'
    }
]

// console.log(user[2].email);
// it will check email/userid ***IMPORTANT try it urself>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// it shows the keys means in which the value is stored eg: Id, Name, IsLoggedIn

// console.log(Object.values(tinderuser));
// it shows the values present inside the keys eg: '4569', 'Rock', false

// console.log(Object.entries(tinderuser));
// it converts into single arrays eg:  [ 'Id', '4569' ], [ 'Name', 'Rock' ]


// console.log(tinderuser.hasOwnProperty("IsLoggedIn"));
// it will check if the property is avialable or not inside the tinder user nd gives output as Boolean


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>De Structuring Objects<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// eg: in react.js we r gonna use the destructring method to recall thing like ({price}),({ins})

let course = {
    courseName : 'javascript', 
    price : 999,
    courseInstructor : "Rock"
}

// console.log(course.courseInstructor); 
// normal way 


let {courseInstructor} = course
// we can now call directly in log that print the name of courseinstructor 

let {courseInstructor : ins} = course
// here we assign 'ins' as short name to recall the courseinstructor 

console.log(ins);
