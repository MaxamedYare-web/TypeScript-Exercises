

// interface user
interface User {
    username: string;
    password:string;
    email?:string
}

// redesign and User add propert Id
type userId =  User & {
   readonly id: string | number
}

function login (user:userId){

return console.log(`ID: ${user.id} username: ${user.username} password: ${user.password} Email: ${user.email || ""} `)

}


const userData:User = {
    username: "Mucaawiye1122",
    password: "123456"
} 



const loginUser : userId = {
     id:"123-879",
     username:"Shamso1441",
     password: "123456"
}

// can't change Id because it is readonly
// loginUser.id = "234-888"

// email can change beacuse ut is not readonly
loginUser.email="shamso@mail.com"


login(loginUser)