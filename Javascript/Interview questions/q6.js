/* The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion. */

function filterProducts(arr,criteria)
{
    // console.log(typeof(criteria));
    searchkey=Object.keys(criteria)[0];
    value=Object.values(criteria)[0];

    filteredarray=arr.filter((ele)=>{
        for (const key in ele) {
            if(key===searchkey&&ele[key]===value){
                return(ele)  
            }
        }
    })
    return filteredarray;
}

let obj1={
    brand:"addidas",
    category:"shoes",
    size:"7",
    color:"green"
}
let obj2={
    brand:"reebok",
    category:"shoes",
    size:"8",
    color:"white"
}
let obj3={
    brand:"addidas",
    category:"shirt",
    size:"M",
    color:"green"
}
let products=[]
function addproduct(obj){
    products.push(obj)
}
addproduct(obj1)
addproduct(obj2)
addproduct(obj3)
// console.log(products);

result=filterProducts(products,{size:"addidas"})
if(result.length==0){
    console.log("No items available")
}
else{
    console.log(result)
}





