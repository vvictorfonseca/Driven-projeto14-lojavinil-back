import { Router } from "express";

import { buyProducts, deleteAllCart, deleteCart }  from "../controllers/cartControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const CartRouter = Router();

CartRouter.post("/finalizar", validToken, buyProducts);
CartRouter.delete("/carrinho", validToken, deleteAllCart);
CartRouter.delete("/carrinho/:_id", deleteCart);

export default CartRouter