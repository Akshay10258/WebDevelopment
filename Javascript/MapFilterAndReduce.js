arr=[1,55,3,4,78]

// MAP FUNCTION - to create a another array by mapping the present array
// i.e - applying a function to "every element of the present array" and store the return value of the function into an other array
newarr=arr.map((a,index,arr)=>{
    return a**2;
})

console.log(newarr)

// FILTER : Creates a new array containing "only the elements from the original array" that pass a specific condition. It "filters" the array based on the provided criteria.

// newarr2=arr.map((ele,index,arr)=>{
//     if(ele>9)
//         {
//             return ele;
//         }
//     return false;
// })

// 1st WAY : by creating a normal function
// function greaterThanNine(ele){
//     if(ele>9)
//     {
//         return true;
//     }
//     return false;
// }

// 2nd WAY : using arrow function
const greaterThanNine=(ele)=>{
    if(ele>9)
        {
            return true;
        }
        return false;
}

filtarr=arr.filter(greaterThanNine)

console.log(filtarr);
// console.log(newarr2);

// NOTE : main difference btw filter and map :
// map : the size of the new array will always be the same as the mapped array
//filter : the size of the new array is always "same or less" than the array being filtered

// REDUCE FN : to apply a function to previous result of the function and the next element of the array ,initially the function is applied to the first two elements of the array

arr2=[2,3,9,8,7,5,4];

const funcred=(a,b)=>{
    return a+b;
}

const redvalue=arr2.reduce(funcred)

console.log(redvalue)

// Object to an array : can be used in hrml

console.log(Array.from("Hello"))