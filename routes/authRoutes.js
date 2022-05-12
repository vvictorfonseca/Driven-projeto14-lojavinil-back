import { Router } from "express";

import { SignIn, SignUp } from "../controllers/authControllers.js";
import { validateSignIn, validateSignUp  } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUp, SignUp);
authRouter.post("/signin", validateSignIn, SignIn)

export default authRouter;