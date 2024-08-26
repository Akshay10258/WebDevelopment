let cont = document.body.children[0];

// cont.children[0].style.backgroundColor=`rgb(${c1},${c2},${c3})`;
console.log(cont.children);

divArray=Array.from(cont.children)
// foreach
function getrandomcolor(){
    rgb1=Math.floor(Math.random()*200);
    rgb2=Math.floor(Math.random()*200);
    rgb3=Math.floor(Math.random()*200);
    return `rgb(${rgb1},${rgb2},${rgb3})`
}
divArray.forEach((ele) => {
    
    // console.log("background codes :",rgb1,rgb2,rgb3);
    ele.style.backgroundColor=getrandomcolor();
    // console.log("text codes :",rgb1,rgb2,rgb3);
    ele.style.color=getrandomcolor();
});

