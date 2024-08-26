let num=prompt("Enter a number : ");
let arr=[];
for (let i = 1; i <=num;i++) {
    console.log(i)
    // arr[i-1]=i;
    arr.push(i);
}

//Using reduce function 
console.log("Using reduce function",arr.reduce((a,b)=>{return a*b}));

// Using konly for loop
let fact=1;
for (let i = 1; i<=num;i++){
    fact*=i;
}

console.log("Using for loop",fact);

