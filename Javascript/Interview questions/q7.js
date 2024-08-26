/* The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost. */

function calculateTotal(products){
    let totalcost=0;
    for (let i = 0; i < products.length; i++) {
        const ele = products[i];
        // console.log(ele.price)
        totalcost+=ele.price*ele.quantity;
    }
    return totalcost;
}

let obj1={
    brand:"addidas",
    category:"shoes",
    size:"7",
    color:"green",
    price:2000,
    quantity:2
}
let obj2={
    brand:"reebok",
    category:"shoes",
    size:"8",
    color:"white",
    price:1000,
    quantity:9
}
let obj3={
    brand:"addidas",
    category:"shirt",
    size:"M",
    color:"green",
    price:2300,
    quantity:4
}

let products=[]

products.push(obj1)
products.push(obj2)
products.push(obj3)

total=calculateTotal(products)
console.log(total)