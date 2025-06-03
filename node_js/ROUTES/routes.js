import express from "express";
import { createPrduct, deleteProduct, findData, updateproduct} from "../controller/controller.js";

const router = express.Router();
router.post("/product", createPrduct);  // ✅ actual route is POST /product

router.get("/product",findData);
router.get("/home",findData);

// update data 
router.put("/product/:id",updateproduct);

router.delete("/product/:id",deleteProduct)

export default router;
