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

export { getCategories, getAlbum };