let  current_users = ["arman12","gabar1","hamza7","areeb","ghuniya"];
let new_users = ["fouzia6","arman12","gabar1","raheela","horain"];
// let check = current_users.includes(new_users[3])
// console.log(check);
// if(check===true){
//     console.log("please select another use name bcz itis already taken.")
// }
new_users.forEach((newUser) =>{
    if(
        current_users.some(
            (current_users)=>current_users.toLowerCase()===newUser.toLocaleLowerCase()
        )
    )
{
    console.log(`${newUser} will need to enter a new username.`);
}else{
    console.log(`${newUser} is available.`);
}
});




