// Creating 2 async functions with same delay:
function getdata1(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },4000)
    })
}

function getdata2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },4000)
    })
}

// ==>the following code fetches both data at once as the 2nd fn is called instantly with no waiting :
// console.log("fetching data1...");

// prom1=getdata1();
// prom1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data2...");

// prom2=getdata2();
// prom2.then((res)=>{
//     console.log(res);
// })

// But we need one after the other for the data to be fetched

console.log("fetching data1...");

prom1=getdata1(1);
prom1.then((res)=>{
    // console.log(res);
    console.log("fetching data2...");
    prom2=getdata2();
    // prom2.then((res)=>{
    //     console.log(res);
    // })
})