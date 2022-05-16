import { Router } from "express";

import {buyProducts, deleteCart}  from "../controllers/cartControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const CartRouter = Router();

CartRouter.post("/carrinho", validToken, buyProducts );
CartRouter.delete("/carrinho/:_id", validToken, deleteCart );

export default CartRouter