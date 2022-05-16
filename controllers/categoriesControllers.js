import db from "../db.js";

async function getCategories(req, res) {
    try {
        const categories = await db.collection("genero").find({}).toArray();
        res.send(categories);
    } catch (e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function getAlbum(req, res) {
    try{
        const album = await db.collection("genero").find({}).toArray();
        res.send(album);
    } catch(e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function getUserCart(req, res){

    try{
        const userCart =  await db.collection("carts").find({}).toArray();
        res.send(userCart)
    }catch(e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function insertToCart(req, res) {

    const { user } = res.locals;
    const { banda, preco, album, url } = req.body;

    console.log("req.body", req.body);

    try{

        await db.collection("carts").insertOne(
            {
                idUsuário: user._id,
                banda: req.body.banda,
                preco: req.body.preco,
                album: req.body.album,
                url: req.body.url
            }
        )
    
        return res.send({ id: user._id }).status(201);
    
    }catch(e){
        console.log(e);
        return res.sendStatus(501);
    }
    
}

export { getCategories, getAlbum, insertToCart, getUserCart };