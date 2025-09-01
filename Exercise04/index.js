function login(user) {
    return console.log("ID: ".concat(user.id, " username: ").concat(user.username, " password: ").concat(user.password, " Email: ").concat(user.email || "", " "));
}
var userData = {
    username: "Mucaawiye1122",
    password: "123456"
};
var loginUser = {
    id: "123-879",
    username: "Shamso1441",
    password: "123456"
};
// can't change Id because it is readonly
// loginUser.id = "234-888"
// email can change beacuse ut is not readonly
loginUser.email = "shamso@mail.com";
login(loginUser);
