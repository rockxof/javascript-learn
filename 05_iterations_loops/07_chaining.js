const myNumbers = [ 1, 2, 3, 4, 5, 6, 7]
// let newNumbers = myNumbers.map( (num) => num +10)
// here we r using map function to add 10 map function always returns but forEach don't
// console.log(newNumbers);

// now lets understand Chaining Method<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let newNumbers = myNumbers
                .map((num) => num * 10)
                .map( (num) => num + 5)
                .filter( (num) => num > 30)
// it is known as chaining method 
// IMPORTANT************** filter is used for CHecking true values
console.log(newNumbers);

