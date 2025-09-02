"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(input) {
    return input;
}
// string generic data
var stringResponse = echo("Mucaawiye");
console.log("String is:", stringResponse);
// number generic data
var numberResponse = echo(980);
console.log("Number is:", numberResponse);
// array generic data 
var arrayResponse = echo(["Shamso", 5544]);
console.log("Array is: ", arrayResponse);
// object geneic data
var objectResponse = echo({ name: "Mohamed", age: 23, lastName: "yare", phone: +252611000000 });
console.log("object is:", objectResponse);
// interface string data
var apiString = {
    status: "pending",
    data: "done"
};
console.log("String interface data:", apiString);
// interface object data
var objectInterface = {
    status: "active",
    data: { id: 123 - 456, name: "mobile" }
};
console.log("objectInterface Data is:", objectInterface);
//  First Element Function
function First(items) {
    return items[0];
}
// array number with generic and first item
var arrayNumber = First([12, 33, 88]);
console.log("first Array number is:", arrayNumber);
// array string with generic and first item
var arrayString = First(["cali", "xaawo", "qadiija"]);
console.log("first Array number is:", arrayString);
// An array of objects
var arrayOfObject = First([{ name: "Qamar", age: 21 }]);
console.log("An array of objects is:", arrayOfObject);
