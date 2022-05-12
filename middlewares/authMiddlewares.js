import { authSignInSchema, authSignUpSchema } from "../schemas/authSchemas.js";
import bcrypt from "bcrypt";

import db from "../db.js";

async function validateSignIn(req, res, next) {

    const { email, password } = req.body

    const {error} = authSignInSchema.validate(req.body, { abortEarly: false })

    if(error){
        return res.status(422).send(error.details.map((error) => error.message))
    }

    try {
        const user = await db.collection("users").findOne({ email: email });
        const isCorrectPassword = bcrypt.compareSync(password, user.password);

        if(!user || !isCorrectPassword) {
            return res.status(404).send("Usuário ou senha incorreto")
        }

        res.locals.user = user;

        next();
    
    }catch(e) {
        res.sendStatus(500);
        console.log(e);
    }
}

async function validateSignUp(req, res, next) {

    const { name, email, password, confirmPassword } = req.body

    const {error} = authSignUpSchema.validate(req.body, { abortEarly: false })

    if(error){
        return res.status(422).send(error.details.map((error) => error.message))
    }

    try {
        const emailRegistered = await db.collection("users").findOne({email: email})

        if (emailRegistered){
            return res.status(422).send("E-mail já cadastrado!")
        }

        next();
    
    }catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export { validateSignIn, validateSignUp }
