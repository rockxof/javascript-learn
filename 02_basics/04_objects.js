// constructer Object = Singleton

// const tinderuser1 = new Object()
// it is a singleton

const tinderuser = {}
// it is not a singleton ----- Literals

// tinderuser.Id = "4569"
// tinderuser.Name = 'Rock'
// tinderuser.Age = 22 
// tinderuser.IsLoggedIn = false

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

console.log(regularUser.Name.realName.lastName);