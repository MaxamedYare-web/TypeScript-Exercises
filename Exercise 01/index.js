"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productName;
var price;
var discointAvailable;
// wrong
// productName = 25 ❌
// true 
productName = "Apple";
// wrong
// price = "2.5" ❌
// true
price = 2.5;
// wrong
// discointAvailable = "false" ❌
// discointAvailable = 8 ❌
// true
discointAvailable = false;
// javascript
// function getDiscoint (price,discoint) {
//     return price - price * discoint
// }
// convert TypeScript ✅
function getDiscoint(price, discoint) {
    return price - price * discoint;
}
// dangerous💀
// function printLengh (x:any) {
//     if(typeof x == "string"){
//         return console.log(x.length)
//     }
//    return console.log(x)
// }
//  Good
function printLengh(x) {
    if (typeof x == "string") {
        return console.log(x.length);
    }
    return console.log(x);
}
printLengh("hello");
printLengh(12345);
console.log(productName);
