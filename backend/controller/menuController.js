const models = require('../model/menuModel');

const listMenu= async (req, res) => {
    try {
        const result= await models.listMenu()
        res.status(200).json(result)
    }catch (err){
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {listMenu}