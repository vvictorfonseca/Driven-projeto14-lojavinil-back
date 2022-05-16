import { Router } from "express";

import { buyProducts, deleteAllCart }  from "../controllers/cartControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const CartRouter = Router();

CartRouter.post("/finalizar", validToken, buyProducts );
CartRouter.delete("/carrinho", validToken, deleteAllCart );

export default CartRouter