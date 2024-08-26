/* The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/
let str="hello"
// console.log(str.slice(-1,-3));
function rev(){
    let revstring="";
    for (let i=str.length-1;i>=0;i--){
        // console.log(i)
        revstring+=str[i];
    }
    return str+revstring;
}

console.log(rev());