// DOM - Document Object Model : it is used to select an object in html document
// BOM - Browser Object Model : has some extra object supported by only the brows

console.log(document.body) //Gives the body of the html document

// Gives all the childnodes:
console.log(document.body.childNodes);
// Here the white space is considered as a text and a childnode of the body

let cont=document.body.childNodes[1]; //can be stored into a variable

//Numbering from 0
console.log(cont); 

// To get the first child (which includes text and comments)
console.log(cont.firstChild); //Gives text 
// To get only the element child of a parent element
console.log(cont.children);
// To get the first element child leaving the text
console.log(cont.firstElementChild);

//To get the siblings of a childelement where they are the child of the same parent
console.log(cont.children[3]); //Referring to box 4

console.log(cont.children[3].nextElementSibling)//referring to box 5
console.log(cont.children[3].previousElementSibling)//referring to box3

// previousSibling gives --> text as it is the previous childnode but not a elementchild

// To get the parent element
console.log(cont.parentElement)//returns body

/* Selection of elements with id and class */
// No need of following DOM

//Using className : returns html collection
let boxes=document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor="aqua";//Through inline css

// Using Id :
document.getElementById("aquabox").style.color="blue";

// Using TagName : returns a HTML collection

console.log(document.getElementsByTagName("div"));

