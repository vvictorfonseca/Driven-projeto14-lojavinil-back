import { Router } from "express";

import buyProducts  from "../controllers/cartControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const CartRouter = Router();

CartRouter.post("/carrinho", validToken, buyProducts );

export default CartRouter