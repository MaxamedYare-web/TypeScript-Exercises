import { Request, Response } from "express";

interface goodBye {
    query:{
        name:string
    }
}

export const sayGoodBye = (req: goodBye, res: Response) => {
  const name = req.query.name;
  
if (!name) {
    return res.status(400).json({
      message: "query 'name' must be string",
    });
  }
  return res.status(200).json({
    firewell: `GoodBye ${name}`,
  });
  
};
