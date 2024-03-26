//  For Of loop

// ["", "", ""]
// [{}, {}, {}] 
// it is for reference in future we will recive this types of data from the databases

const arr = [ 1, 2, 3, 4, 5, 6]
// for (const index of arr) {
//     // console.log(index); 
// }

const myName = "Prateek Pandey"
for (const word of myName) {
    
    // console.log(`letters of my name is ${word}`);
}

// Maps

 const map = new Map()
//  Map is also an object in js nd map.set is a function of it

 map.set('IN', 'India')
 map.set('FR', 'France')
 map.set('USA', 'United States Of America')
 map.set('EU', 'Europe')
 map.set('UK', 'United Kingdom')

// for (const key of map) {
//     console.log(key);
// if we will use this then the output will be in array eg: [ 'IN', 'India' ], [ 'FR', 'France' ]
// }

// thats why we r using this method 
 for (const [key , value] of map) {
    // console.log(key, '-', value);
// output wil be : IN - India, FR - France, USA - United States Of America, EU - Europe
 }

//   Imp Ques. What wiil happen if we use forof loop on object? Lets Try...

const myObj = {
    game1 : ' RDR2',
    game2 : ' Spiderman',
    game3 : ' Gta V',
    game4 : ' Pubg'
}

// for (const keys of myObj) {
//     console.log(keys);
    // it will throw an error : myObj is not iterable , so we can't use forof loop on Object
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMP<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  so basically forof loop can be used on Array, String or Map as per now .
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMP<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    