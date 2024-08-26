let adjective={
    "1":"Crazy",
    "2":"Amazing",
    "3":"Fire"
}

let shopName={
    "1":"Engine",
    "2":"Foods",
    "3":"Garments"
}

let anotherName={
    "1":"Bros",
    "2":"Limited",
    "3":"Hub",
}


//To generate num btw 1 to 4 "excluding 4" -->Math.floor(Math.random()*(Max-Min)+Min) -->gives "excluding max"
//Math.random() --> generates btw 0 and 1 excluding 1 -->here >0.7 results in final ans as 3
let adjn=Math.floor((Math.random()*(4-1))+1); 
let shopn=Math.floor((Math.random()*(4-1))+1);
let anothern=Math.floor((Math.random()*(4-1))+1);

console.log(adjn)
console.log(shopn)
console.log(anothern)

function nameGenerator(n1,n2,n3){
    businessName=adjective[adjn]+shopName[shopn]+anotherName[anothern]
    console.log(businessName)
}

nameGenerator(adjn,shopn,anothern)