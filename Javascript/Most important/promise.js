// resolve and reject are two fns 
// Either the promise results in resolve or reject and returns the resp arg passed with them

/*
    REM:

    what is passed to promise? : a function with resolve and reject which are functions by default,as the arguements 
    what does promise return? : it returns a promise object with "state and result"
    
    settlement of promise(not pending anymore) ==> either resolve or reject

    The handlers(they are callbacks) :-
    resolve : promise settled successfully
    reject : promise did not settled successfully

    two imp terms : state and result 
    1."state" of promise: can be pending(when no resolve or reject fn is called,or either of them is called but with delay without any waitingk)
    fulfilled : when resolve is called
    rejected: when reject is called
    
    2."result" of promise:whatever the arguement is passed to reslove or reject, its "undefined if reject and resolve are not called "
*/

//  asynchronous call : a fn that takes time to execute
let prom1 = new Promise((resolve,reject) => {
    a=Math.random();
    if(a<0.5){
        reject("It got rejected !!");
    }

    else{
        setTimeout(() => {
            console.log("I got fulfilled")
            resolve("Done")
        }, 3000);
    }
})

// console.log(prom1);

// then : a method used with promise when the promise is resolved/fulfilled
// It takes a function that needs to be executed when the promise is resolved ,with a "default optional parameter that is the --> result of the promise/arg of the resolve"

// catch : a method used with promise when the promise is rejected 
// It takes a function that needs to be executed when the promise is rejected ,with a "default optional parameter that is the --> result of the promise/arg of the reject"  
prom1.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Catch helps to print the error msg ,else error is returned

// Promise.all : returns all the resolve of multiple promises as an array
// let p=Promise.all([prom1,prom2])

// Promise.allSettled : returns the status of multiple promises irresp of whether they are rejected or resolved

// Promise.race - the fasted executed promise's result will be returned