let a=prompt("Enter first number : ")
let b=prompt("Enter second number : ")
let c=prompt("Enter operation ")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

function calculator(a,b,c) {
    prob=Math.random()
    console.log(prob);
    /*Longer way :
    if(prob<0.1)
    {
        sums=a-b;
        product=a+b;
        difference=a/b;
        division=a**b;
        console.log("The sum of a and b is : ",sums)
        console.log("The product of a and b is : ",product)
        console.log("The difference of a and b is : ",difference)
        console.log("The division of a by b is : ",division)
    }

    else
    {
        console.log("The sum of a and b is : ",a+b)
        console.log("The product of a and b is : ",a*b)
        console.log("The difference of a and b is : ",a-b)
        console.log("The division of a by b is : ",a/b)
    }
    */

    // shorter way : using eval --> the middle parameter need to be operator 
    if(prob<0.1){
        // performing wrong calculation
        c=obj[c];
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    }
    else{
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    }
}

calculator(a,b,c);