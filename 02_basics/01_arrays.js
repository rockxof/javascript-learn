const myArr = [ 0, 6, 2, 3, 5]
const myHeroes = [ 'spidermon', 'ironmon', 'thooor', 'bikashdubey', 'ravikishaann']

const myArr2 = new Array(0,3,4,9,7,5,8,6,4,6,4,5)
// **important here we didn't used the square bracket 

// console.log(myArr[4]);
// console.log(myHeroes.length);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ARRAY METHOD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// myArr.push(29)
//to add in array 
// myArr.pop()
// to remove the last input from arrays

// myArr.unshift("roxk")
// it added the "roxk" in startng of array,we should avoid it if elements are longer in array
// myArr.shift()
// it will shift(remove) first element 

// console.log(myArr.includes(5));
//search element nd alwys gives output as boolean value
// console.log(myArr.indexOf(3));
// if we  will ask any index which is not present then it will show -1

const newArr = myArr.join()
// it is used to add/change all the elements of Array into String
// console.log(newArr);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SLICE & SPLICE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const newN1 = myArr.slice(-4 , 4)
console.log("myArr " , myArr);
console.log("slice ", newN1);
console.log(myArr);

const newN2 = myArr.splice(-4 , 4)
//splice manupulates the original array eg. it will take the elements out from array
console.log("splice ", newN2);
console.log(myArr);