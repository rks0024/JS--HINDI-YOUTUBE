//singleton

//const tinderUser = new Object() //singleton

const tinderUser = {} // not singleton

tinderUser.id = "12345"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rohit@gmail.com",
    fullName:{
        userFullname:{
            fistname: "rohit",
            midilname: "kumar",
            lastname: "sah",
        }
    }
}
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullname.fistname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign( {},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


//console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "990",
    courseInsructor: "Hitesh"
}
const {courseInsructor: instructor} = course
//console.log(courseInsructor);
console.log(instructor);

// api




