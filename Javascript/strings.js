// TEMPLATE LITERALS 
/* here backticks `` are used instead of qoutes to declare a string which allows :

1.usage of quoutes inside the string
other way to use it --> using escape sequence : \' or \" 
2.string interpolation - using ${}
*/

let myname="akshay";
let skill="web development";
console.log("Hello I am "+myname+" ,i am learning "+skill)

// using template literals :

console.log(`Hello I am "${myname}" ,i am learning "${skill}"`);

// Some Fns of string :

let sample="Development"
console.log(sample.toUpperCase())
console.log(sample.toLowerCase())
console.log(sample.length)
console.log(sample.slice(1,5))
console.log(sample.replace("ment","ing"))
let cat="dev"
console.log(sample.concat("web",cat))
console.log(myname[4]);
console.log(sample.split("v")); //returns as an array
// console.log(Array.from("10 20 30"))
//Note : string is "Immutable"