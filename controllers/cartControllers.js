import { ObjectId } from "mongodb";
import db from "../db.js";

async function buyProducts(req, res) {

    const { info } = req.body

    console.log("info", req.body);

    try {
        await db.collection("sales").insertMany([{ info }]);
        return res.sendStatus(201);
    } catch (e) {
        console.log(e);
        res.sendStatus(504);
    }
}

async function deleteCart(req, res){

    const { _id } = req.params;

    try {
        const searchCart = await db.collection("carts").findOne({ _id: parseInt(_id) });
        if (!searchCart) {
            return res.status(400).send("Disco não encontrado!");
        }
        const deleteCart = await db.collection("carts").deleteOne({ _id: parseInt(_id) });
        res.sendStatus(200);
        console.log(deleteCart);
    } catch (error) {
    res.status(500).send(error);
    }
}

async function deleteAllCart(req, res) {

    const { user } = res.locals

    try {
        await db.collection("carts").deleteMany({ userId: user._id })
        return res.sendStatus(200)
    } catch (e) {
        return res.status(500).send(error)
    }
}

export { buyProducts, deleteAllCart, deleteCart };