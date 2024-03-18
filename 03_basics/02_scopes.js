// Global scope nd Block Scope

// let a = 10;
// const b = 20;
// var c = 30;
// here it is global scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
// here it is Block scope
}
console.log(c);
//IMPORTANT NOTE*** the output will be 30. but if we print a nd be it will show error which is right
// because they r in Block scope they shouldn't be recalled outside thats why we avoid to use of  (var) 
// in javascript

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTANT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// interview question : in node js the global scope is different or in web console that is different
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<