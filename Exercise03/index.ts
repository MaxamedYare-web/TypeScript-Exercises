export {}

// javascript convert typescript
function fullName(first:string,last:string):string{
    return first + " " + last
}
console.log(fullName("Maxamed","Yare"))


// optional and default parameters
function registerUser (username:string,language: string="en",isAdmin?:boolean){
  return `username: ${username}, isAdmin: ${isAdmin || false}, language: ${language}`
}
console.log(registerUser("Mucaawiye02","so"))


// average 
function average (...scores:Array<number>):number{

 const sum = scores.reduce((a,b)=> a + b , 0)
 const avrage = sum / scores.length
 return avrage

}

console.log("Student avrage is:",average(76,35,45,15,10,5,9))