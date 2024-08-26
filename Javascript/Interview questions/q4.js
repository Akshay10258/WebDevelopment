/* Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds. */

async function multiply(ele)
{
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove(ele*2)
        }, 500);
    })
}

let arr=[1,2,3,4];

arrayOfPromises=[];

(async function (){
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        // await arrayOfPromises.push(multiply(ele))
        // res=await multiply(ele);
        await multiply(ele)
        arrayOfPromises.push(multiply(ele))
    }
    console.log(arrayOfPromises);
})()

// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     arrayOfPromises.push(multiply(ele))
// }
