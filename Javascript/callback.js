// js has asynchronous actions - that follows non-sequence order of execution
console.log("hello")
console.log("bye")

setTimeout(() => {
    console.log("I am with setTimeout");
}, 1000);

console.log("I actually needed to be executed last ");

// callback fn : a fn which is passed as an arguement to another function
// REM LATER : u can create code snippets for own shortcuts using json 
function callback(ele){
    console.log(ele);
}

const loadscript=(src,callback)=>{
        let sc=document.createElement("script");
        // onload : Execute a JavaScript immediately after a page has been loaded
        sc.src=src;
        scr.onload=callback("Hello");
        document.head.append(sc);
}

loadscript("Exercise-5.js",callback);