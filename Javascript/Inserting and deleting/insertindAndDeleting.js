console.log(document.querySelector(".container"));

// InnerHtml tag
console.log(document.querySelector(".container").innerHTML);
// It can be used to change the content :
console.log(document.querySelector(".box").innerHTML="hello i am akshay");
// InnerText
console.log(document.querySelector(".container").innerText);

// OuterHtml : Gives including the selected tag
console.log(document.querySelector(".container").outerHTML);

// TagName : gives name of the tag
console.log(document.querySelector(".container").tagName);

// NodeName : applicable for all kind of nodes i.e- comment and text 
console.log(document.querySelector(".container").nodeName);

// TextContent :
console.log(document.querySelector(".box").textContent);

// Hidden : to hide a tag returns irue if it is hidden

// Attribute methods :
/*
hasAttribute : to check whether a particular html element has an attribute 
getAttribute : to get the attribute 
attributes : to list all the attributes 
removeAttribute : to remove a particular attribute 
*/
// datatset : to get the data that has been used as an attribute 

// INSERTION METHODS :

// 1.Creation
let div1=document.createElement("div");

// 2.Giving attributes
// setattribute("attributeName","value");
div1.setAttribute("class","created by js");

// 3.Inserting or placing it under any element by selecting that element
// i)Append - at the last under the selected element(node)
document.querySelector(".container").append(div1);

// ii)Before and after - before and after the selected element
// document.querySelector(".container").before(div)

// 4.to enter text content
div1.innerHTML = "I am inserted using js inertion methods";

// insert adjacent :

/* div.insertAdjacentElement("")

--> all are wrt the div
afterbegin
beforend

beforebegin
afterend
*/