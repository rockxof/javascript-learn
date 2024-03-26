// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< // While Loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  Que 1.> Print all the Even no. less than 30 
// let i = 2;
// while (i <= 30) {
    // console.log(i);
    // i = i + 2;
    // it is same as i++ but here we r incresing i with 2plus
// }

// Que 2. Print the value insde an array using while loop
let myArray = ["rock", "romanreings", "batista", "samoajoe", "johncena"]
let arr = 0;
while (arr < myArray.length) {
    // console.log(myArray[arr]);
    arr++;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Do While Loop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// here we will do same Qno.1 using do while loop to understand its basic

let j = 2;
do {
    console.log(j);
    j = j + 2;
} while (j <= 30);
