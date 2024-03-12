// DATES    imp*** In array number counts starts from 0

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// Tue Mar 12 2024
// console.log(myDate.toISOString());
// 2024-03-12T00:52:31.191Z
// console.log(myDate.toLocaleDateString());
// 3/12/2024
// console.log(myDate.toLocaleTimeString());
// 6:23:46 AM
// console.log(myDate.toUTCString());
// Tue, 12 Mar 2024 00:55:03 GMT

// let myCreatedDate = new Date(2023, 1, 23, 5,4,2);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedNewDate = new Date("2023-01-15");
// console.log(myCreatedNewDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// 1710206683709 this is milisecond this is the tym from 1970
// console.log(myCreatedNewDate.getTime());
// 1673740800000 this is the time from date 15-01-2023
// console.log(Math.round(Date.now()/1000));
// 1710206979 it converted into seconds by dividing 1000

let newDate = new Date();
// console.log(newDate);
// 2024-03-12T01:36:23.209Z
// console.log(newDate.getMonth() + 1);
// +1 added here because to get exact month ...3
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    year: "numeric"
}));