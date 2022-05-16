import db from "../db.js";

async function buyProducts(req, res){

    const {info} = req.body

    console.log("info", req.body);

    try{
        await db.collection("sales").insertMany(info);
        return res.sendStatus(201)
    }catch(e){
        console.log(e);
        res.sendStatus(504);
    }
}

export default buyProducts