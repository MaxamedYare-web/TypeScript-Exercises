
import  express from "express"
import { sayGoodBye } from "../controllers/goodBy.Controls"


const router = express.Router()

router.get("/",sayGoodBye)

export default router


