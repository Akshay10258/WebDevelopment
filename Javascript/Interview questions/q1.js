/* The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them randomly. */

let arrAsstring=prompt("Enter the array elements with space in between : ")

function double(){
    // console.log(typeof(arrAsstring));
    stringarr=arrAsstring.split(" ");
    // console.log(stringarr)
    intarray=stringarr.map((ele)=>{
        return parseInt(ele);
    })

    //Number is built in fn that converts string into number and returns it
    // intarray=stringarr.map(Number)

    for (let i=0;i<intarray.length;i++) {
        // console.log(intarray[i])
        if(intarray[i]==intarray[i+1]){
            rand=Math.random();
            // (rand<0.5)?(arr[i]*2) : (arr[i+1]*2)
            (rand<0.5)?(intarray[i]=intarray[i]*2) : (intarray[i+1]=intarray[i+1]*2)
            i++;
        }
        else{
            intarray[i]*=2;
        }
    }
    console.log(intarray)
    document.write(intarray)
}

double()
