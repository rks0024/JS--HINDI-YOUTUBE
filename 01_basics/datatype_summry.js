// primitive

// 7  type : String, Number, Boolearn , null, undefined, Symbal, BigInt





// Reference(Non primitive)

// Array, Objects, Functions

//+++++++++++++++++++++ memory +++++++++++++++++

//  Stack (Primitive), Heap(Non- Primitive )

let myClassname= " rohitkumar"

let anothername = myClassname
anothername = " rohit"
console.log(myClassname);
console.log(anothername);

let userOne ={
    email: "user@goole.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "rohitkumar40631@gmail.com"
console.log(userOne);
console.log(userTwo);