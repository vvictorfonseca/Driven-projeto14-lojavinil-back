import { Router } from "express";

import { buyProducts }  from "../controllers/cartControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const CartRouter = Router();

CartRouter.post("/finalizar", validToken, buyProducts );
//CartRouter.delete("/carrinho", validToken, deleteCart );

export default CartRouter