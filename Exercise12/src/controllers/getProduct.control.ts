
import { Request,Response } from "express"

type params = {
    id:string
}
type body = {
     name: string, price: number 
}

export const getProduct = (req:Request<params,{},body>,res:Response)=>{

const {id} = req.params
const {name,price} = req.body

 res.status(200).json({
    message:`productName is ${name} and price is $${price} productID is ${id}`
 })


}


