
import express from "express"
import authRouter from "./routes/loginUser.rout"



const app = express()
app.use(express.json())

app.use("/auth",authRouter)


app.listen(3000,()=>{
    console.log("the server is running 3000")
})






