const course={
    id: 1,
    title : "JavaScript",
    price: 199,
    courseIstructor: "Sweksha"
}

const {courseIstructor} = course; // destructuring object :- refers to extracting the values of specific keys from an object and storing them in variables. It really helps with writing cleaner and more readable code.
console.log(courseIstructor);

const{title:courseTitle, price:coursePrice} = course; // destructuring object with renaming

console.log(courseTitle); // JavaScript
console.log(coursePrice); // 199