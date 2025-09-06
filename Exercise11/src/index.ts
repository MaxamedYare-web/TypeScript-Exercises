
import express from "express";
import router from "./routes/good.ByRout";

const app = express()

app.use(express.json())

app.use("/hello",router)

app.listen(5000,()=>{
    console.log("service is running 5000")
})