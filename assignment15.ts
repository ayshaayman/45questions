let guestList =["farah","mustafa","omaima"];
let guestNotcoming="omaima";
let guestComming="ifrah";
guestList.splice(2);
guestList.push("ifrah");
for (let i=0;i<guestList.length;i++){
    console.log("this invitation is for :"+guestList[i])
}
console.log(`my dear friend ${guestNotcoming} would not be able  to joine us in the party .
\n so instead of ${guestNotcoming} ${guestComming} would be joing us.`)




//ASSIGNMENT 16
console.log("Assignment16")
guestList.unshift("ahmed");  //added to the first position
guestList.push("kulsum","fatima");  //add to the last position


//new invitation messages for the new invited guest
console.log("list of new guests is :"+guestList)
console.log(`as the new table has been arranged so more guest are invited.`)
for (let i=0;i<guestList.length;i++){
    console.log("this invitation is for :"+guestList[i])
}
console.log(`you are invited to the party ${guestList}`);


//ASSIGNMENT 17'
console.log("Assignment17")

guestList.shift();
guestList.pop()
guestList.pop()
guestList.shift();
console.log("The table can not be arranged on time thats why some of guest are not invited for the party sorry for inconvinence.\n Now the List of new guests is :"+guestList);
for (let i=0;i<guestList.length;i++){
    console.log("this invitation is for :"+guestList[i])
}

export {guestList} ;