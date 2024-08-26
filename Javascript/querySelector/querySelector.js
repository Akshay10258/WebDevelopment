// querySelector : selects the element by "only the first occurence of the mentioned class"
// the class should given along with the dot

document.querySelector(".box").style.backgroundColor = "orange";

// querySelectorAll : "returns a nodelist" with all the objects with mentioned class

// The style cant be applied to nodelist directly but to each element by running a loop

document.querySelectorAll(".qbox").forEach(ele=>{
    ele.style.backgroundColor="green";
})

// Note : foreach can only be applied on nodelist and arrays