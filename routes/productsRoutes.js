import { Router } from "express";

import { getAlbum } from "../controllers/categoriesControllers.js";

const productsRouter = Router();

productsRouter.get("/descricao", getAlbum);

export default productsRouter;