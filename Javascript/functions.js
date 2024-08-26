function sum(a,b) {
    console.log(a,b); //b becomes "undefined type"
    return a+b;
}

result=sum(3);

console.log(result) //returns not NaN - not a number ,as two parameters are required

// Arrow function : to use the function name as variable

const func1=(p1)=>{
    console.log(p1);
}

func1(10)

