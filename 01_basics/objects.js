// sigleton 
//constructor: object.create

// object literals
const mySym= Symbol("key1")

const jsUser= {
    name: "Vivek",
    "full name": "Vivek Agrawal",
    [mySym]: "myKey1",
    age: 20,
    location:"Ghaziabad",
    email: "Vivek@google.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(["full name"])
console.log(typeof(jsUser[mySym]))
console.log(jsUser)
//Object.freeze(jsUser) // after applying freeze no further changes are execute
name: "Agrawal"
console.log(jsUser.name)
console.log(jsUser)

jsUser.greeting = function(){
    console.log("My name is Vivek")
}
console.log(jsUser.greeting())



jsUser.greeting2= function(){
    console.log(`My name is ${this.name}`)
}
console.log(jsUser.greeting2())