const models = require('../model/walletModel');
const deposit= async (req, res) => {
    try{
        const result= await models.deposit(req.body)
        res.status(200).json(result)
    }catch (e) {
        res.status(500).send("something went wrong")
    }
}

module.exports = {deposit}