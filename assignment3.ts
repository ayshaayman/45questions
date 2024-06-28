let personName: string="aysha ayman khan"


//lower case
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase())


let words:string[]=personName.split(" ");
 let titlecaseName:string =" "
 for (let i = 0; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase() +" "
    
 }
 console.log("titlecase :",titlecaseName)