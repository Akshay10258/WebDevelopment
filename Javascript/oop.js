// Object : a datatype 

/* let student={
    name:"akshay",
    rollno:20
}
console.log(student.name);

let boy={
    height:"5feet 6inches",
    hobby:"coding"
}

// objects have their own properties along with a "prototype" which is used to set other properties or properties of one obj to another

boy.__proto__=student; //gets the prototype of student along with its own properties

 */

class animal{
    constructor(animalname){
        this.name=animalname; //this : used to set a new property of the class
        // now name is a new property of the class with the value as animalname
        console.log("object has been created");
    }

    eating(){
        console.log("I like food");
    }

    jump(){
        console.log("I like Jumping")
    }
}

//creating the object of the class
let anobj=new animal("gorilla")
console.log(anobj);
console.log(anobj.name);

// Inheriting the prorties of one class to another
// using "extend"

class lion extends animal{
    //if there is need to change its constructor
    //u need to call the constructor of the parent class using "super()"
    // super : used to run any method of the parent class
    constructor(lionname){
        super(lionname)
        console.log("I am tiger and my name is",lionname);
    }

    //method overwiting
    eating(){
        super.eating()//calls the eating of the parent class
        console.log("I love hunting")
    }
}

let t=new lion("shera");
console.log(t.name)
console.log(t.eating())

//instanceof : tells whether the object belongs to a particular class which can wvwn bw an ancestor class

console.log(t instanceof animal)