export {}

function echo<T>(input:T):T{

    return input

}

// string generic data
const stringResponse = echo<string>("Mucaawiye")
console.log("String is:",stringResponse)


// number generic data
const numberResponse = echo<number>(980)
console.log("Number is:",numberResponse)

// array generic data 
const arrayResponse = echo<[string,number]>(["Shamso",5544])
console.log("Array is: ",arrayResponse)

// object geneic data
const objectResponse = echo<{
    name:string,
    age:number,
    lastName:string,
    phone:number}>({name:"Mohamed",age:23,lastName:"yare",phone:+252611000000})

console.log("object is:",objectResponse)


// Generic Interface
interface ApiResult<T> {
    status:string;
    data:T
}

// interface string data
const apiString:ApiResult<string>= {
    status:"pending",
    data:"done"
}
console.log("String interface data:",apiString)


// interface object data
const objectInterface: ApiResult<{id: number; name: string}> = 
{
 status:"active",
 data:{id:123-456,name:"mobile"}
}
console.log("objectInterface Data is:",objectInterface)


//  First Element Function
function First<T>(items: T[]):T{

    return items[0]
}

// array number with generic and first item
const arrayNumber = First<number>([12,33,88])
console.log("first Array number is:",arrayNumber)


// array string with generic and first item
const arrayString = First<string>(["cali","xaawo","qadiija"])
console.log("first Array number is:",arrayString)



// An array of objects
const arrayOfObject = First<{name:string,age:number}>([{name:"Qamar",age:21}])
console.log("An array of objects is:",arrayOfObject)



