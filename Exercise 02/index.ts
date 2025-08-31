export {}
// string array
const names : string[] =["Hamdi","Axmed","Maxamed"]
console.log("Names: ",names)


// array number
const grades : Array<number> = [25,50,65,70,95]
console.log("Grade: ",grades)

// array boolean 
const status : Array<boolean> = [true,false,true]
console.log("Status: ",status)

// convert typescript
const products: Array<string> = ["Mobile","laptop"]
products.push("iphone")
console.log("products: ",products)

//tuples array 
const location : [string,number,number] = ["Mogadishu",7700998,23347687]
console.log("City:",location[0])
console.log("latitude:",location[1])
console.log("longtude:",location[2])