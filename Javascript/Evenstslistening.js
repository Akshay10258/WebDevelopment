let but=document.getElementById("Submit");

console.log(but);
// Mouse events : click,dblclick,contextmenu,etc..
but.addEventListener("click",(e)=>{
    document.querySelector(".box").innerHTML="Submission done successfully !!";
    console.log(e);
})

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// Other events :
/*
Keyboard events 
form element events 
document events 
*/