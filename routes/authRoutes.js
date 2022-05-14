import { Router } from "express";

import { SignIn, SignUp } from "../controllers/authControllers.js";
import { validateSignIn, validateSignUp  } from "../middlewares/authMiddlewares.js";
import { getCategories } from "../controllers/categoriesControllers.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUp, SignUp);
authRouter.post("/signin", validateSignIn, SignIn);
authRouter.get("/albuns", getCategories);

export default authRouter;