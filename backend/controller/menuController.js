const models = require('../model/menuModel');

const listMenu= async (req, res) => {
    try {
        const result= await models.listMenu()
        res.status(200).json(result)
    }catch (err){
        res.status(500).json({ message: "Something went wrong" });
    }
}
const selectedMenu= async (req, res) => {
    const {menu_id} = req.body
    try {
        const result= await models.selectedMenu(menu_id)
        res.status(200).json(result)
    }catch (err){
        res.status(500).json({ message: "Something went wrong" });
    }
}
const search=async (req, res) => {
    const {keyword} = req.body;
    try {
        const result= await models.search(keyword)
        res.status(200).json(result)
    }
    catch (err){
        res.status(500).json({ message: "Something went wrong" });
    }
}

const category=async (req, res) => {
    const {keyword} = req.body;
    try {
        const result= await models.category(keyword)
        res.status(200).json(result)
    }
    catch (err){
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {listMenu,selectedMenu,search,category}