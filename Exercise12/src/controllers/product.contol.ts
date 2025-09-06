

import { Request,Response } from 'express';
import { productQueryType } from '../types/ProductQuery';

export const productControl = (req:Request<{},{},{},productQueryType>,res:Response)=>{

const {page,limit} = req.query

res.status(200).json({
    message:`the page is ${page} and limitid is ${limit}`
})

}









