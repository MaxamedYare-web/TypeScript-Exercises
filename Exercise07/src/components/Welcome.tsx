
// interface of user
interface Users {
    username : string;
    isPremium: boolean
}

// props and destructive 
export const Welcome = ({username,isPremium}: Users)=>{
    return (
        <>
        
     <h1>{username}</h1>
        <div>
            {
                isPremium ? <p>Welcome Back</p> : <p>Welcome, guest</p>
            }
        </div>
        </>
    )
}