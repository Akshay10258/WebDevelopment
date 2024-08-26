console.log("fetching data1...");

prom1=getdata(1);
prom1.then((res)=>{
    console.log(res);
})

console.log("fetching data2...");

prom2=getdata(2);
prom2.then((res)=>{
    console.log(res);
})
