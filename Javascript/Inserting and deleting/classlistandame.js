
let list=document.querySelector(".container").classList;

let div2=document.createElement("div");

div2.setAttribute("class","classlist mybox");

document.querySelector(".container").after(div2);

div2.innerHTML="i am from the second js file";

// Classlist:
console.log(document.querySelector(".classlist").classList);

// Class name :
console.log(document.querySelector(".classlist").className)

// Opertaions on class :
// 1.Adding a new class
document.querySelector(".classlist").classList.add("newclass");

// 2.Removing a class
document.querySelector(".classlist").classList.remove("newclass");

// 3.toggle a class : adds the class if not exists and deletes if it already exists 
document.querySelector(".classlist").classList.toggle("color"); //it adds as it is not present 