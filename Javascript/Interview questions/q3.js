/* The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. */

password=prompt("Enter your password : ")
let lower,upper,digit,len;
function passwordvalidator(){
    len=password.length>=8;
    for (let i = 0; i < password.length; i++) 
    {
        if(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90)
        {
            upper=true;
        }
        
        else if(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122){
            lower=true
        }

        else if(password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57){
            digit=true
        }

        if(lower&&upper&&digit){
            casestatus=true;
            break;
        }
    }

    if(len&&casestatus){
        console.log("Password set successfully")
        document.write("Your password set success fully : ",password)
    }

    else{
        if(length!=true){
            console.log("Atleast 8 char are required")
            alert("Atleast 8 char are required")
        }

        if(upper!=true){
            console.log("Uppercase is mandatory")
            alert("Uppercase is mandatory")
        }
        if(lower!=true){
            console.log("Lowercase is mandatory")
            alert("Lowercase is mandatory")
        }
        if(digit!=true){
            console.log("Atleast one digit is mandatory")
            alert("Atleast one digit is mandatory")
        }
    }
}

passwordvalidator()