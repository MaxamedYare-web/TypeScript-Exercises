export {}

let productName : string;

let price :number;

let discointAvailable : boolean ;

// wrong
// productName = 25 ❌

// true 
productName = "Apple"

// wrong
// price = "2.5" ❌

// true
price = 2.5

// wrong
// discointAvailable = "false" ❌
// discointAvailable = 8 ❌

// true
discointAvailable = false

// javascript
// function getDiscoint (price,discoint) {
//     return price - price * discoint
// }


// convert TypeScript ✅
function getDiscoint (price: number,discoint:number) {
    return price - price * discoint
}

// dangerous💀
// function printLengh (x:any) {
   
//     if(typeof x == "string"){
//         return console.log(x.length)
//     }
//    return console.log(x)

// }


//  Good
function printLengh (x:unknown) {
   
    if(typeof x == "string"){
        return console.log(x.length)
    }
   return console.log(x)

}

printLengh("hello")

printLengh(12345)
console.log(productName)