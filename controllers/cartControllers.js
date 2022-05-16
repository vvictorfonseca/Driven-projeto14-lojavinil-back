import { ObjectId } from "mongodb";
import db from "../db.js";

async function buyProducts(req, res){

    const {info} = req.body

    console.log("info", req.body);

    try{
        await db.collection("sales").insertMany([{info}]);
        return res.sendStatus(201);
    }catch(e){
        console.log(e);
        res.sendStatus(504);
    }
}

/*async function deleteCart(req,res){

    const { id } = req.body;

    console.log("aquiiii", id)

    try{
        const carts = db.collection("carts");
        await carts.deleteOne({_id: new ObjectId(id)})

        return res.sendStatus(200)
    }catch(e){
        return res.status(500).send(error)
    }
}*/

export { buyProducts };