const course={
    coursename: "js in hindi",
    courseprice: "999",
    courseinstructor: "hitesh"
}
//first method to access values
console.log(course.courseinstructor) 

// we dont write again and again course.xyz

//second method to access values
const {courseinstructor}= course
// console.log(courseinstructor)

// destructuring the object
const {courseinstructor:teacher} = course
console.log(teacher)


// JSON API
{
    "name": "Hitesh",
    "price": "999",
    "coursename": "js in hindi"
}

[
    {},
    {},
    {},
    {}
]