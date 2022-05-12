import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

import db from "../db.js";

async function SignUp(req, res){
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try{
        await db.collection("users").insertOne(
            {
                name: name,
                email: email,
                products: [{}],
                password: passwordHash,
                confirmPassword: passwordHash
            }
        )

        return res.send(201); //created
    
    }catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

async function SignIn(req,res){
    const { user } = res.locals;

    try{
        const token = v4();
        await db.collection("sessions").insertOne({ token, userId: user._id})

        return res.send( {token: token, name: user.name }).status(200)
    
    }catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export { SignIn, SignUp };