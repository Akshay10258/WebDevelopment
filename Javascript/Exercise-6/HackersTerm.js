// function interval(i){

//     let t = setInterval(() => {
//         // let last = document.body.getElementsByTagName("div");
//         let last = document.body.querySelector(".messages").children[i];
//         console.log(last)
//         // console.log(last);
//         // last = last[last.length - 1]
//         // if(last.innerHTML.endsWith("...")){
//         //     last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
//         // }
//         // else{
//             last.innerHTML = last.innerHTML + "."
//     }, 700);
//     console.log(t);
// }

// function dots(fn,i){
//     fn(i);
// }
// let t = setInterval(() => {
//     let last = document.body.querySelector(".messages").getElementsByTagName("div");
//     last = last[last.length - 1]
//     if(last.innerHTML.endsWith("...")){
//         last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
//     }
//     else{

//         last.innerHTML = last.innerHTML + "."
//     }

// }, 100);

async function printdatadelay(ele,delay){
    console.log(delay)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            div=document.createElement("div");
            document.querySelector(".messages").append(div);
            div.innerHTML=ele;
            // clearInterval()
            resolve("success");
            // console.log("I entered")
        },delay)
    })
}

function generaterandtimeout(){
    timeout=Math.floor((Math.random()*6)+1);
    return timeout*1000;
}
function dotinterval(){
    
    let t = setInterval(() => {
        let last = document.body.querySelector(".messages").getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
    
            last.innerHTML = last.innerHTML + "."
        }
    
    }, 150);
    return t;
}
async function callprint(){
    // console.log(ele);

    for (let i = 0; i < message.length; i++) {
        const ele = message[i];
        t=dotinterval()
        delay=generaterandtimeout();
        await printdatadelay(ele,delay);
        // dots(()=>{
        //     clearInterval(1)
        // },i)
        // await printdatadelay(ele,1000);
        clearInterval(t);
    }
    
    setInterval(()=>{
        ran=Math.floor((Math.random()*2)+1)
        if(ran==1){

            document.body.style.backgroundColor="green"
            document.querySelector(".image").style.display="inline"
            document.querySelector(".image").src="hackimg.jpg"
        }
        else{
            document.querySelector(".image").style.display="none"
            // document.querySelector(".image").innerHTML="";

            document.body.style.backgroundColor="black";
        }
        // document.body.style.backgroundColor="black"
    },200)
    
}
let message=["Initializing hacking","Loading viruses","Reading Your files","Password Files detected","Sending all Files to the server","Cleaning Up"];

let butt=document.querySelector(".but");
butt.addEventListener("click",()=>{
    butt.style.display="none";
    document.body.style.backgroundColor="black";
    callprint();
});
// callprint()

// message.forEach(ele => {
//     console.log("entered loop");
//     callprint(ele);
// });

