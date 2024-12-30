const models = require('../model/orderModel');
const order= async (req, res) => {
    try{
        const result= await models.order(req.body)
        res.status(200).json(result)
    }catch (e) {
        res.status(500).json({error: e})
    }
}

module.exports = {order}