// Datatypes : 7 types

let a="Akshay"
let b=33;
const p=true;
let q=undefined;
let r=null; // a object type

console.log(a,b,p,q,r);
console.log(typeof(a),typeof(b),typeof(p),typeof(q),typeof(r));

// Object : key value pairs

let student={
    name:"Akshay R", //if space is present then "" --> is mandatory
    "Reg No":2193488,
    Cgpa:10
}

console.log(student);
student.skill="web development";//To add a new element to the object
// console.log(student.keys[0]);

//IMP :
/* 
Object.keys(objname)==>returns an array containing the keys of the object
Object.values(objname)==>returns an array containing the values of the object
Object.entries(objname)==>returns each key value pair an array to bigger array
*/
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
//Important operators
/*
=== : to check the equality of values and their types 
*/

// Important loops

/*
1.forin loop - for iterating in objects 
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

Ex : for(const key in obj){
    console.log(key)
}
2.forof loop - for iterationg through an array or a string
for (const iterator of object) {
    
}

Ex : for(const c in "akshay"){
    console.log(c);
}
*/
