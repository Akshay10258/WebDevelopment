// 1.Matches - checks whether the given selector(can be class or id or name or the tagname) matches with that of a selected element

let tags=document.getElementsByTagName("div")
console.log(tags);

console.log(tags[3].matches(".box"));//returns true

// 2.Closest : checks whether the given selector matches with the slected element and then until its last parent and "returns that element"

console.log(tags[1].closest(".container"));
//first checks with tags[1] then with its first parent div which has the class container thus returns that parent

// 3.Contains : checks whether a slector contains an another selctor

// document.getElementsByClassName("container"); -->cant ne used as it returns html collection not a single selector
console.log(document.querySelector(".container").contains(tags[3])); //returns true
