// Destructuring : using ...rest

// let x,y=[10,20]; //this is wrong x and y remains undefined

let [x,y,...rest]=[10,20,57,84,98,87];

console.log(x,y);
//the extra elements are onerted into an another array
console.log(rest)

//For objects :

let obj={
    a : 20,
    b : 30,
    c : 40
}

let {a,b}=obj;


// console.log(obj.a,obj.b);
console.log(a,b);
console.log(obj);

// ... (spread operator)
function sum(a,b,c){
    return a+b+c;
}

arr=[1,2,3]
console.log(sum(...arr)) //same as sum(arr[0],arr[1],arr[2])
// it spreads the elements of the array

let objfromarray={...arr} //with key as 0,1,2...
console.log(objfromarray)

// HOISTING :
// If a variable is declared using var and its is used/accessed before the declaration then it doesnt throw error as all the interpreter moves all declarations to the top of a func or any code but value/initialization is not taken into consideration

function Hoisting(){
    console.log(myvar)//prints undefined
    var myvar=33;
    //let myvar=33; : this would return an error,the same goes with 'const'
}
Hoisting();
// It also works for functions : fn call can be made before the fn defn unless it a const fn