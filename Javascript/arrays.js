let arr=[1,3,2,5]
//Arrays are mutable and "can store elements of different datatype"
// typeof array is object
arr[0]=20;

console.log(arr,typeof(arr))

// Methods on arrays :

console.log(arr.toString())
console.log(arr.join(" | ")) //Prints the array with the element spc in between the array elements 

console.log(arr.pop()) //returns the last element

console.log(arr.shift()) //returns the first element and the other elements are shifted

arr.push("bye")//inserts the element as the last elem of the array
arr.unshift("hello") //inserts the element as the first elem of the array

console.log(arr)

delete arr[1]; //Deletes the particular item but doesnt change the size of the array the memory remains allocated   
console.log(arr)

console.log(arr.concat(['h','e','l','l','o']))

let arrofstr=['M','E','N','U']
console.log(arrofstr.reverse())
console.log(arrofstr.join(''))
console.log(arrofstr.includes('M'))

arr=[1,6,2,4,9,7]
console.log(arr.sort()) //Note : Changes the original array too
console.log("splice",arr.splice(2,1,"spl1"))//removes a part of the original array as per the mentioned indices and if req adds the third arg to the array at that post
// syntax : arr.splice(index,no of elements)
console.log(arr)

console.log("slice",arr.slice(1)) //doesnt change the original array
// from index 1 it returns the array

// shift and unshift
let newwArr=["hello","bye","tata"]

let shiftArr=newwArr.shift()
console.log(shiftArr)

arr2=[1,22,7,5,23]
// console.log(arr2.reverse())-->doesnt work
// foreach loop- by passing 3 parameters you can get the value ,index and  array

arr2.forEach((value,index,ar) => {
    console.log(value,index,ar)
});

