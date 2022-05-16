import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";

import authRouter from "./routes/authRoutes.js"
import productsRouter from "./routes/productsRoutes.js"
import cartRouter from "./routes/cartRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(authRouter);
app.use(productsRouter);
app.use(cartRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green("Server running on port " + process.env.PORT))
})