for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is the center no.');
    }
    // console.log(element);
    
}

for (let x = 1; x <= 4; x++)
{
    // console.log(`outer value is ${x}`);
    // for(let y = 1; y <= 4; y++)
    // // console.log(`inner value is ${y} nd outer value is ${x}`);
    // console.log(`${x} * ${y} = ${x*y}`);
}

let myArray = ["rock", "romanreings", "batista", "samoajoe", "johncena"]
for (i = 0; i < myArray.length; i++)
{   
    const element = myArray[i];
    // console.log(element);
} 

// break in loop 
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        // console.log("5 is Detected");
        break;
    }
    // console.log(`value of ${i}`);

    
}

// continue in loop
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is Detected");
        continue;
        // it will skip 5
    }
    else if (i == 10) {
        console.log(`10 is Detected`);
        continue;    
        // it will skip 1O
    }
    console.log(`value of ${i}`);

    
}