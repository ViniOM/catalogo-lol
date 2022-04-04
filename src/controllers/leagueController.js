const res = require('express/lib/response');
const Campeao = require('../models/Campeao');

const getAll = async(req, res) => { 
    
    try {
        const ligadaslendas = await Campeao.findAll();
        res.render("index", { ligadaslendas } );
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

const signup = (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        res.status(500).send ({ err: err.message })
        
    }
};

const create = async (req,res) => {
    try {
        const campeao = req.body;

        if(!campeao) {
            return res.redirect("/signup");
        }

        await Campeao.create(campeao);
        res.redirect("/");
    }catch (err) {
        res.status(500).send ({ err: err.message });
    }
};


module.exports = {
    getAll,
    signup,
    create,
}