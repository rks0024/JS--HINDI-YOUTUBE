// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "rohit",
    "full name" : "rohit kumar",
    [mySym]: "myKey1",
    age: 22,
    location: "patna",
    email: "rohitkumar40631.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

jsUser.email = "rohitkumar40631@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "rohitkumar565587493"
//console.log(jsUser);

jsUser.greetind = function(){
 console.log("hello js user");
}
jsUser.greetindtwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greetind());
console.log(jsUser.greetindtwo());