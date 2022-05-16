import { Router } from "express";

import { getAlbum, getUserCart, insertToCart } from "../controllers/categoriesControllers.js";
import validToken from "../middlewares/categoriesMiddlewares.js";

const productsRouter = Router();

productsRouter.get("/descricao", getAlbum);
productsRouter.get("/carrinho", validToken, getUserCart);
productsRouter.post("/descricao", validToken, insertToCart);

export default productsRouter;