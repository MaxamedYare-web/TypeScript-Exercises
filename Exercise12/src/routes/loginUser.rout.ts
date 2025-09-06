
import express from "express"
import { loginUser } from "../controllers/loginUser.control"
import { productControl } from "../controllers/product.contol"
import { getProduct } from "../controllers/getProduct.control"


const router = express.Router()

router.post("/login",loginUser)
router.get("/products",productControl)
router.put("/products/item/:id",getProduct)

const authRouter = router

export default authRouter




