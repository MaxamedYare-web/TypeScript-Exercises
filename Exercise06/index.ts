

// create enum
enum UserRole {
    Admin = "superadmin",
    User = "moderator",
    Viewer = "viewer"
}


// functioncanEdit will reaturn true when there is admin or modorator and viewer when it is false
function canEdit(role:UserRole){
 if(role === UserRole.Admin || role === UserRole.User){
    return true
 }else if(role === UserRole.Viewer){
   return false
 }

}
console.log(canEdit(UserRole.Viewer))

// about AS
const button = document.querySelector("button") as HTMLButtonElement
 const btn = button.disabled











