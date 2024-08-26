//==> Normal default asynchronous way of execution

/* function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Now i am resolved")
            resolve(400);
        }, 3000);
    })
}

console.log("Loading...");
console.log("Gettting files")
console.log("Reading Files")

let data=getdata() //directly returns the promise with status <pending>(It takes time to complete)
console.log(data);

console.log("recieving data")
console.log("process continues")

 */
//==> Using then function
/*
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(400);
        }, 3000);
    })
}

console.log("Loading...");
console.log("Gettting files")
console.log("Reading Files")

let data=getdata()

//once the data is processed only "then" it returned i.e-after the set interval
data.then((v)=>{
    console.log(data)
    console.log("data recieved")
})
*/

// Using async and await : the function runs in the backend and the other commands gets executed and await waits till the promise gets evaluated

// IMP NOTE : async fn "always returns a promise",eventhough you dont create a promise yourself

async function getdata() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(400);
    }, 3000);
    });
}
async function main(){
    console.log("Loading...");
    console.log("Gettting files");
    console.log("Reading Files");

    // Thus trying to control the asynchrous execution by using await
    let data = await getdata();//works only when inside a async function
    console.log(data);
    console.log("data received");
}
main();


// json (java script object notation): this file format is used for storing and exchanging data between web and the server 

// API (Application Programme Interface): it is a interface that take sour requirements and fetches the data for us from various desired servers and platforms

// All of the ABOVE ways were to fetch the data from a function given in the code

// The entire function returns a promise
// async function getdata() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // return x; - returns the data in chunks of raw data
//     let data = await x.json(); //parsing the data into json format
//     return data;
// }
// async function main(){
//     console.log("Loading...");
//     console.log("Gettting files");
//     console.log("Reading Files");

//     // Thus trying to control the asynchrous execution by using await
//     let data = await getdata();//works only when inside a async function
//     console.log(data);
//     console.log("recieving data");
// }
// main();

// methods can be specified for fetch : POST (to submit data), GET(To get the data from tghe server),...
