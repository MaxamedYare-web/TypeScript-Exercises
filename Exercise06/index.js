// create enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "superadmin";
    UserRole["User"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
// functioncanEdit will reaturn true when there is admin or modorator and viewer when it is false
function canEdit(role) {
    if (role === UserRole.Admin || role === UserRole.User) {
        return true;
    }
    else if (role === UserRole.Viewer) {
        return false;
    }
}
console.log(canEdit(UserRole.Viewer));
// about AS
var button = document.querySelector("button");
var btn = button.disabled;
console.log(btn);
