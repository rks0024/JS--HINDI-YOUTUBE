// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2026,0,24)
//console.log(myCreatedDate.toDateString());

//  let myCreatedDate = new Date(2026,0,23.5,4)
//  console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2026")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
