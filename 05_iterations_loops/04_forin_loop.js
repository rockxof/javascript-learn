// forin loop
// last tym we encountered an error that myObj isn't iliterable now we will use forin loop for the Object

const myObj = {
  game1: " RDR2",
  game2: " Spiderman",
  game3: " Gta V",
  game4: " Pubg",
};
for (const key in myObj) {
  // console.log(key);
  // it will simply print the keys of the object eg: game1, game2, game3, game4
  console.log(`${key} is ${myObj[key]}`);
  //  Now this will will print key with it's Value. Eg: game1 is  RDR2, game2 is  Spiderman
}

// ***IMP if we use forin loop in Map then it will show error we already knows it

// WHat will happen if we use forin loop in Array let's find out
const arr = [ 1, 2, 3, 4, 5, 6]
for (const key in arr) {
//    console.log(key);
//    It will give output as: 0, 1, 2, 3, 4, 5  , so thats why we Prefer forof loop in arrays
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OUTCOME>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// IF WE NEED TO USE A LOOP IN OBJECT THEN WE WILL USE FORIN LOOP

// IF WE NEED TO USE A LOOP IN ARRAY THEN WE WILL USE FOROF LOOP nd there are others too for array

