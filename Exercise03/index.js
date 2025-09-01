"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// javascript convert typescript
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Maxamed", "Yare"));
// optional and default parameters
function registerUser(username, language, isAdmin) {
    if (language === void 0) { language = "en"; }
    return "username: ".concat(username, ", isAdmin: ").concat(isAdmin || false, ", language: ").concat(language);
}
console.log(registerUser("Mucaawiye02", "so"));
// average 
function average() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var sum = scores.reduce(function (a, b) { return a + b; }, 0);
    var avrage = sum / scores.length;
    return avrage;
}
console.log("Student avrage is:", average(76, 35, 45, 15, 10, 5, 9));
