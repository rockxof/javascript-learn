// Immediately Invoked Function Expressions(IIFE)

// Why we use IIFI?
// ans: due to the pollution of global scope or any var declared in global, so we don't want them to interfere or pollute my function thats why we use IIFI

// syntax () ()

(function binod() {
    // this IIFI is named IIFI because we declared the name of function
    console.log(`Database Connected`);
}) ();  //here this Semicoloumn is importantt because if we dont use it it wiill throw an error whenever we r using more than One IIFE we should use semicolumn After It 



((name) => console.log(`Database Name is ${name}`)) ('bindu')
// unnamed IIFI