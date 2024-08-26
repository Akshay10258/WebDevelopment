function createCard(title, cName, views, monthsOld, duration, thumbnail,i){
    // Finish this function
    
    // adding the card :
    card=document.createElement("div");
    card.setAttribute("class","card");
    document.querySelector(".container").append(card);
    
    // Adding thumbnail:
    imgdiv=document.createElement("div");
    imgdiv.setAttribute("class","image");
    document.querySelectorAll(".card")[i].append(imgdiv);
    
    thum=document.createElement("img");
    thum.setAttribute("src",thumbnail);// alt way : thum.src=thumbnail
    document.querySelectorAll(".image")[i].append(thum);
    
    //Adding duration :
    // document.querySelector(".duration").innerHTML=duration;//For single card
    durationdiv=document.createElement("div");
    durationdiv.setAttribute("class","duration");
    document.querySelectorAll(".card")[i].append(durationdiv);
    durationdiv.innerHTML=duration;

    // Adding the title :
    // document.querySelector(".title").innerHTML=title; //For single card
    titlediv=document.createElement("div");
    titlediv.setAttribute("class","title");
    document.querySelectorAll(".card")[i].append(titlediv);
    titlediv.innerHTML=title;

    // Adding channel Name,views and monthsOld :
    
    if(views>=1000 && views<1000000){
        views=(Math.floor(views/1000))+"K";
    }
    else{
        views=(Math.floor(views/1000000))+"M";
    }
    // document.querySelector(".cname").innerHTML=cName+" . "+views+" views"+" . "+monthsOld+" months";//For single card
    
    cNamediv=document.createElement("div");
    cNamediv.setAttribute("class","cname");
    document.querySelectorAll(".card")[i].append(cNamediv);
    cNamediv.innerHTML=cName+" • "+views+" views"+" • "+monthsOld+" months";
}



let num=1;
for (let i = 0; num!=0; i++) {
    title=prompt("Enter the title of the webpage : ")
    cName=prompt("Enter the Channel Name : ")
    views=prompt("Enter the No of Views : ")
    monthsOld=prompt("Enter Months old : ")
    duration=prompt("Enter the duration of the video : ")
    thumbnail=prompt("Enter the link of the thumbnail : ")   
    exit=prompt("Do you want to stop adding : (Y/N):")
    if(exit=="Y"){
        num=0;
    }
    else{
        num++;
    }
    createCard(title, cName, views, monthsOld, duration, thumbnail,i);
}
