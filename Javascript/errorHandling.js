// js is a "forgiving" language - it tries to return as less errors as possible

// But its important to identify some errors that are crucial

// They both return strings
let num1=prompt("Num 1 :")
let num2=prompt("Num 2 : ")

console.log(num1+num2); //concatenates instead of adding
//js doest return any error

// to convert to integer
console.log(parseInt(num1)+parseInt(num2)); //if strings are passed returns NaN


//Types of error :
// 1.Throwing error : "to throw an custom error";
if(isNaN(num1)||isNaN(num2)){
    throw SyntaxError("Please enter a number");
}

// Normal error thrown by js 
// console.log(getdata)
//getdata is not defined ,thus error is thrown and "The EXECUTION STOPS"

// Handling the error --> using try catch=> the code tries to execute if error gets thrown then the catch gets executed and "THE CODE EXECUTION DOESNT STOP"
try {
    console.log(getdata)
} catch (error) {//error is a default automatic parmeter passed by the js
    // console.log(error.name)
    // console.log(error.message)
    // console.log(error.stack)
    console.log("sorry, couldnt get the data")
}
//it gets executed irr of error is thrown or not
// IMP : "ITS ACTUAL USE CASE IS WHEN TRY CATCH IS USED INSIDE A FUNCTION"
finally{
    console.log("I was destined to be executed irrespective of the error")
}
console.log("Hey,the code execution didnt stop")

//finally INSIDE A FUNCTION:
function getdata(){
    try {
        console.log(getdata)
        return "data"
    } catch (error) {
        console.log("sorry, couldnt get the data")
        return "error occured"
    }
    finally{
        console.log("close all files and close db connectiom")
    }

    //IMP : here finally gets executed eventhough "control is returned inside both try and catch"
}
