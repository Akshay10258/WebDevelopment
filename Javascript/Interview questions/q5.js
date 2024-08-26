/* The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay. */

async function placeOrder(timeout){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Order placed successfully")
        }, timeout);
    })
}

function rand(){
    timeout=Math.floor(Math.random()*10000)
    console.log(timeout);
    return timeout;
}

placeOrder(rand()).then((ele) => {
    console.log(ele);
}
)

