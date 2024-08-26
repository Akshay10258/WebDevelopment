// Asynchronous Programming
// Example 1: using callback:

/*
function getdata(dataid,getdatafnascallback){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getdatafnascallback){
            getdatafnascallback();
        }
    },2000)
}

getdata(1,()=>{
    getdata(2);
})
*/

// Using multiple callbacks to fetch more data :
/*
function getdata(dataid,getdatafnascallback){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getdatafnascallback){
            getdatafnascallback();
        }
    },2000)
}

// This works but it is difficult to understand because of the nesting of the functions callbacks - callback hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    });
})
*/

// Example 2: using promises :
// the fn gives the promise instantly when called and gives the data after the delay specified
/* function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },4000)
    })
}

// ==>the following code fetches both data at once as the 2nd fn is called instantly with no waiting :
// console.log("fetching data1...");

// prom1=getdata(1);
// prom1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data2...");

// prom2=getdata(2);
// prom2.then((res)=>{
//     console.log(res);
// })

// But we need one after the other for the data to be fetched

console.log("fetching data1...");

prom1=getdata(1); //getting 1st promise that we will get data1
prom1.then((res)=>{ //after the 1st promise is fulfilled then we ask for the 2nd promise that we will get data2
    console.log("fetching data2...");
    prom2=getdata(2);
    
    prom2.then(()=>{
        console.log("fetching data3...");
        prom3=getdata(3);

        prom3.then(()=>{
            console.log("fetching data4...");
            prom4=getdata(4);
        })
    })
})

// shorter way : taking promises consequtively by asking(i.e-caliing the function consequtively)

    getdata(1)
    .then(()=>{
        return getdata(2)
    })
    .then(() => {
        return getdata(3)
    }
    )
    .then(() => {
        return getdata(4)
    }
    ) 
 */

// Example 3 : using async and await 

async function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },2000)
    })
}

async function askpromise(){
    console.log("fetching data1....")
    await getdata(1);
    console.log("fetching data2....")
    await getdata(2);
    console.log("fetching data3....")
    await getdata(3);
    console.log("fetching data4....")
    await getdata(4);
    // for (let i = 0; i < 5; i++) {
    //     const ele = arr[i];
    //     await getdata(ele);
    // }
}
// let arr=[1,2,3,4,5]

askpromise(); //calling the caller fuction

// Multiple calls to this caller function doesnt work with await

// IIFE- Immediately Invoked Function Expression => to call the function immediately it is encountered to avoid calling the function agin and give a name
// gets executed only once 
// syntax :
/* (function (){

})() */

// Conclusion : readabilty order : async-await >> promises >> callbacks

