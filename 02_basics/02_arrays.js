const marvelheroes = ['thor', 'ironman', 'Loki']
const dc_heroes = ['superman', 'flash', 'batman']

// marvelheroes.push(dc_heroes)
// it will push dc_heroes into marvelheroes as 3rd element **avoid

// console.log(marvelheroes);

// console.log(marvelheroes[3])


let avengers = marvelheroes.concat(dc_heroes)
//concat will combine all the elements of both array nd will make a new array withot modyfying existing array
// console.log(avengers);

const allHeroes = [ ...marvelheroes, ...dc_heroes]
// it is know as spread. it is the best way to combine arrays
// console.log(allHeroes);


const randomArray =[ [ 2, 4, 1],[ [6, 7, 8 ],[ 0 , 4, 5,]]]

let newRandomArray = randomArray.flat(Infinity)
// it is used to make a single  array out of all its sub arrays
// console.log(newRandomArray);

// console.log(Array.isArray("Rock"));
// it will check if it is array or not nd returns the boolean value

// console.log(Array.from("Rock"));
// it will create array from "Rock" or any given value 

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<IMPORTANT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
// console.log(Array.from({name: "Rock"}));
// it will return [] as output. here we are converting a object into a array 
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<IMPORTANT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><

let score1 = 100
let score2 = 200 
let score3 = 300
let score4 = 400
console.log(Array.of(score1, score2, score3, score4));
// it will create a array of given inputs