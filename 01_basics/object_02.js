// const tinderUser= new Object()

const tinderUser= {}
tinderUser.id= "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false
// console.log(tinderUser)

const regularUser={
    email: "abs@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Vivek",
            lastname: "Agrawal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1= {
    1: "a", 2:"b"
}
const obj2={
    3: "c", 4:"d"
}
// const obj3= {obj1,obj2}
// console.log(obj3)
//  const obj3= Object.assign(obj1,obj2)

const obj3= {...obj1,...obj2}
//  console.log(obj3)

 console.log(tinderUser)
 console.log(Object.keys(tinderUser))  // return array
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))

 //hasOwnProperty // returns true or false