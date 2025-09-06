import {Request,Response} from "express"
import { LoginBodyType } from "../types/LoginBody"




 export  const loginUser = (req:Request<{},{},LoginBodyType>,res:Response)=>{

    const {email,password} = req.body
    
    if(!email && !password){
       res.status(400).json({
        message:"Email and Password is required"
       })
    }

    res.status(200).json({
        message:`login was Successfully email ${email}`
    })

}







